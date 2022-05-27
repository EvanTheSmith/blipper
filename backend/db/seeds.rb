evan = User.create(username: "Evan");
nancy = User.create(username: "Nancy");
kyle = User.create(username: "Kyle");

Blip.create(user_id: evan.id, content: "Change your mindset, change your life.");
Blip.create(user_id: evan.id, content: "Practice gratitude.");
Blip.create(user_id: evan.id, content: "It all starts with you and what you choose to think about.");