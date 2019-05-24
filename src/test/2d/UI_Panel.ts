import { Laya } from "Laya";
import { Main } from "./../Main";
import { Sprite } from "laya/display/Sprite"
	import { Stage } from "laya/display/Stage"
	import { Image } from "laya/ui/Image"
	import { Panel } from "laya/ui/Panel"
	import { Browser } from "laya/utils/Browser"
	/**
	 * ...
	 * @author suvivor
	 */
	export class UI_Panel 
	{
		
		constructor(){
			Laya.init(800, 600);

			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;

			Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
			Laya.stage.bgColor = "#232628";
			
			this.setup();
		}
		
		private setup():void 
		{
			var panel:Panel = new Panel();
			panel.hScrollBarSkin = "res/ui/hscroll.png";
			panel.hScrollBar.hide = true;
			panel.size(600, 275);
			panel.x = (Laya.stage.width - panel.width) / 2;
			panel.y = (Laya.stage.height - panel.height) / 2;
			Main.box2D.addChild(panel);
			
			var img:Image;
			for (var i:number = 0; i < 4; i++) 
			{
				img = new Image("res/ui/dialog (1).png");
				img.x = i * 250;
				panel.addChild(img);
			}
		}
		
	}


