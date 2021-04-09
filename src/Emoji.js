import React from"react";

export default function Emoji(props){

let currentEmoji = (null)
  if (props.conditions === "Clouds") {
    currentEmoji = "☁️";
  } else if (props.conditions === "Clear") {
    currentEmoji = "☀️";
  } else if (props.conditions === "Snow") {
    currentEmoji = "❄️";
  } else if (props.conditions === "Rain") {
    currentEmoji = "🌧";
  } else if (props.conditions === "Drizzle") {
    currentEmoji= "☔️";
  } else if (props.conditions === "Thunderstorm") {
    currentEmoji = "🌩";
  } else {
    currentEmoji = "🌫";
  }
return (currentEmoji)
}


