### 智能化的投資品種,
  根據行情結構,應對最新行情作出相應操作
  將逐步演化完善
  以下代碼等名目,僅僅是用於對接現有的Python接口,將來系統中都可以統一換成中文
###

### 單品依據自身行情形成的策略
  寄宿於投資品種法內
###
class SecurityStrategy # 單品策略
  constructor: (@名稱,@對策)->
  toString: -> "SecurityStrategy" # "單品策略"
  選時: (品種)-> false
  應對: @對策


### 組合策略
  寄宿與組合內
###
class CollectionStrategy
  constructor: (@名稱,@機制)->
  toString: -> "組合策略"
  選時: (品種)-> false
  選擇: (範圍)->
    品種 for 品種 in 範圍 when 品種.合適 選時
  準備: -> @選擇 []

module.exports =
  SecurityStrategy: SecurityStrategy
  CollectionStrategy: CollectionStrategy
