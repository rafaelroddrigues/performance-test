package br.com.treinamento.portal.api

import br.com.treinamento.header.Header
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object User {

  var getUser =
    exec(http("Gets the user with the specified identifier")
      .get("api/users/${userId}")
      .headers(Header.header_accept)
      .check(status.is(200)))
      //.check(jsonPath("$.key").saveAs("variable"))).exitHereIfFailed

  var createUser =
    exec(http("Creates an user")
      .post("api/users")
      .headers(Header.header_content)
      .body(ElFileBody("bodyExample.json"))
      .check(status.is(200)))

  var updateUser =
    exec(http("Updates an user")
      .put("api/users/${userId}")
      .headers(Header.header_content)
      .body(ElFileBody("bodyExample.json"))
      .check(status.is(200)))

  var deleteUser =
    exec(http("Deletes an user")
      .delete("api/users/${userId}")
      .headers(Header.header_accept)
      .check(status.is(200)))
}
