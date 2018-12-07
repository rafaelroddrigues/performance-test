package br.com.gpa.api.simulation

import br.com.gpa.utils.Config
import br.com.gpa.portal.api.Products
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class ProductSimulation extends Simulation {

  val httpProtocol = http
    .baseURL(Config.urlApiPrefixo)

  val scenarioLivePrice = scenario("Live Price")
    .exec(Products.livePrice)

  val scenarioSkuLivePrice = scenario("Sku Live Price")
    .exec(Products.skuLivePrice)

  setUp(scenarioLivePrice.inject(rampUsers(1000) over (60 seconds))).protocols(httpProtocol)
  //setUp(scenarioLivePrice.inject(constantUsersPerSec(400) during(3 seconds))).protocols(httpProtocol)
  //setUp(scenarioLivePrice.inject(constantUsersPerSec(500) during(60 seconds))).throttle(reachRps(500) in (10 seconds),holdFor(1 minute)).protocols(httpProtocol)
  //setUp(scenarioSkuLivePrice.inject(rampUsers(1) over (3 seconds))).protocols(httpProtocol)

}
