package br.com.treinamento.api.simulation

import br.com.treinamento.utils.Config
import br.com.treinamento.portal.api.User
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class UserSimulation extends Simulation {

  val usuarios = csv("apiUser.csv").circular

  val httpProtocol = http
    .baseURL(Config.urlApiPrefixo)

  val userCompleteCrud = scenario("All CRUD User operations")
    .feed(usuarios)
    .exec(
      group("CRUD operations") {
        exec(User.createUser)
        .pause(5)
        .exec(User.getUser)
        .exec(User.updateUser)
        .exec(User.deleteUser)
      })

  setUp(userCompleteCrud.inject(rampUsers(1) over (5 seconds))).protocols(httpProtocol)

  //clean test -Dgatling.simulationClass=br.com.treinamento.api.simulation.UserSimulation

}
