function MainMenuCursorView(cursor) {
  this._cursor = cursor;
}

MainMenuCursorView.prototype.draw = function (ctx, x, y) {
  if (!this._cursor.isVisible()) {
    return;
  }
  ctx.drawImage(ImageManager.getImage(this.getImage()), x + 40, y);
};

MainMenuCursorView.prototype.getImage = function () {
  return 'tank_player1_up_c0_t' + this._cursor.getTrackFrame();
};
