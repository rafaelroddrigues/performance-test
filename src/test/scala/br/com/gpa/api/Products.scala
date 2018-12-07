package br.com.gpa.portal.api

import br.com.gpa.header.Header
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Products {

  var livePrice =
    exec(http("Live Price")
      .post("/pa/v3/products/ecom/livePrice?storeId=501")
      .headers(Header.header_live_price)
      .body(ElFileBody("livePrice.json"))
      .check(status.is(200)))

  var skuLivePrice =
    exec(http("Sky Live Price")
      .post("/pa/v3/products/ecom/skuLivePrice?storeId=501")
      .headers(Header.header_sku_live_price)
      .body(ElFileBody("skuLivePrice.json"))
      .check(status.is(200)))
}
