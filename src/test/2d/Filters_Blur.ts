import { Laya } from "Laya";
import { Main } from "./../Main";
import { Sprite } from "laya/display/Sprite"
	import { Stage } from "laya/display/Stage"
	import { BlurFilter } from "laya/filters/BlurFilter"
	import { Browser } from "laya/utils/Browser"
	import { Handler } from "laya/utils/Handler"
	import { WebGL } from "laya/webgl/WebGL"
	
	export class Filters_Blur 
	{
		private apePath:string = "res/apes/monkey2.png";
		
		constructor(){
			// 不支持WebGL时自动切换至Canvas
			Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;

			Laya.stage.scaleMode = "showall";
			Laya.stage.bgColor = "#232628";

			Laya.loader.load(this.apePath, Handler.create(this, this.createApe));
		}

		private createApe(_e:any=null):void
		{
			var ape:Sprite = new Sprite();
			ape.loadImage(this.apePath);

			ape.x = (Laya.stage.width - ape.width) / 2;
			ape.y = (Laya.stage.height - ape.height) / 2;

			Main.box2D.addChild(ape);

			this.applayFilter(ape);
		}

		private applayFilter(ape:Sprite):void
		{
			var blurFilter:BlurFilter = new BlurFilter();
			blurFilter.strength = 5;
			ape.filters = [blurFilter];
		}
	}

