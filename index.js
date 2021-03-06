// Generated by CoffeeScript 1.10.0

/* 智能化的投資品種,
  根據行情結構,應對最新行情作出相應操作
  將逐步演化完善
  以下代碼等名目,僅僅是用於對接現有的Python接口,將來系統中都可以統一換成中文
 */

/* 單品依據自身行情形成的策略
  寄宿於投資品種法內
 */
var CollectionStrategy, SecurityStrategy;

SecurityStrategy = (function() {
  function SecurityStrategy(名稱, 對策) {
    this.名稱 = 名稱;
    this.對策 = 對策;
  }

  SecurityStrategy.prototype.toString = function() {
    return "SecurityStrategy";
  };

  SecurityStrategy.prototype.選時 = function(品種) {
    return false;
  };

  SecurityStrategy.prototype.應對 = SecurityStrategy.對策;

  return SecurityStrategy;

})();


/* 組合策略
  寄宿與組合內
 */

CollectionStrategy = (function() {
  function CollectionStrategy(名稱, 機制) {
    this.名稱 = 名稱;
    this.機制 = 機制;
  }

  CollectionStrategy.prototype.toString = function() {
    return "組合策略";
  };

  CollectionStrategy.prototype.選時 = function(品種) {
    return false;
  };

  CollectionStrategy.prototype.選擇 = function(範圍) {
    var i, len, results, 品種;
    results = [];
    for (i = 0, len = 範圍.length; i < len; i++) {
      品種 = 範圍[i];
      if (品種.合適(選時)) {
        results.push(品種);
      }
    }
    return results;
  };

  CollectionStrategy.prototype.準備 = function() {
    return this.選擇([]);
  };

  return CollectionStrategy;

})();

module.exports = {
  SecurityStrategy: SecurityStrategy,
  CollectionStrategy: CollectionStrategy
};

//# sourceMappingURL=index.js.map
