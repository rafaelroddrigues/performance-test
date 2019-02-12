package br.com.treinamento.utils

object Config {

  val urlApiPrefixo: String = System.getProperty("url.api", "http://fakerestapi.azurewebsites.net/");

}