interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";

  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}

const settings: GameSettings = {
  speed: "fast",
  quality: "low",
};

settings.speed;

settings.quality;

settings.username;

settings["username"];
