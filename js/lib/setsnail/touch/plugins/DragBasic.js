function DragBasic(n,o,r){var i=new DraggerPlugin;return i.dragAmount=1,i.lockX=!1,i.lockY=!1,i.init=function(n,o,r){i.dragAmount=n||1,i.lockX=o,i.lockY=r,i.priority=-100},i.dragMove=function(){i.dragInfo.dist.x=i.lockX?0:i.dragInfo.dist.x*i.dragAmount,i.dragInfo.dist.y=i.lockY?0:i.dragInfo.dist.y*i.dragAmount},i.init(n,o,r),i}