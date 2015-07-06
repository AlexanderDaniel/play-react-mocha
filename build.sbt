name := """play-react-mocha"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

scalaVersion := "2.11.6"

JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

libraryDependencies ++= Seq(
  "org.webjars"                 %% "webjars-play"                   % "2.4.0-1",
  "org.webjars"                  % "react"                          % "0.11.2",
  "org.webjars"                  % "requirejs-node"                 % "2.1.18"
)

MochaKeys.requires += "Setup"
