name := """play-react-mocha"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

scalaVersion := "2.11.1"

JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

libraryDependencies ++= Seq(
  "org.webjars"                 %% "webjars-play"                   % "2.3.0-2",
  "org.webjars"                  % "react"                          % "0.11.2"
)

MochaKeys.requires += "Setup"
