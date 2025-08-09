function LivesView(player) {
  this._player = player;
}

LivesView.prototype.draw = function (ctx) {
  ctx.fillStyle = "#000000";
  ctx.font = "16px prstart"
  
  ctx.fillText(this._player.getLives(), 482, 286);
  
  ctx.drawImage(ImageManager.getImage('lives'), 465, 272);
};
