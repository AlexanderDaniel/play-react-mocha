name := """play-react-mocha"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

scalaVersion := "2.11.1"

JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

