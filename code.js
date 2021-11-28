//Play speech on the home screen 
playSpeech("Fast-Aid, Your best friend in emergency,Click on the go button to start ", "male", "English");
//Code for go button 
onEvent("wlcm.btn", "click", function( ) {
  stopSound();
  setScreen("home");
  playSpeech("Click the situation of which you want to get the aid ", "male", "English");
});
//Code for the button which redirect to the screen which tells the aid and also for the home button on every screen 
//Changing of screen triggers the playSpeech() option which speaks the aid as same as given on the screen 
// It also stops any other sound which started previously 


//code for snake bite 
onEvent("snkBite.btn", "click", function( ) {
  stopSound();
  setScreen("SnakeBite");
  playSpeech("Immediately move away from the area where the bite occurred, If the snake is still attached use a stick or tool to make it let go.Remove anything tight from around the bitten part of the body (e.g.: rings, anklets, bracelets) as these can cause harm if swelling occurs, Avoid traditional first aid methods, herbal medicines and other unproven or unsafe forms of first aid, Call Ambulance and transport the person to health facility as soon as possible. Paracetamol may be given for local pain", "male", "English");
  });

//code for Dog Bite 
onEvent("dogBite.btn", "click", function( ) {
  stopSound();
  setScreen("dogBite");
  playSpeech("Wash the wound. Use mild soap, and run warm tap water over it for five to 10 minutes,Slow the bleeding with a clean cloth,Wrap the wound in a sterile bandage,Apply over-the counter antibiotic cream if you have it.Keep the wound bandaged and see your doctor as soon as possible,Watch for signs of infection, including redness, swelling, increased pain and fever. ", "male", "English");
});

//code for Fracture 
onEvent("Fracture.btn", "click", function( ) {
 stopSound();
 setScreen("Fracture");
 playSpeech("If the person is unconscious, has difficulty breathing or is bleeding severely, these must be dealt with first, by controlling the bleeding with direct pressure and performing CPR,If the person is conscious to prevent any further pain or damage by keeping the fracture as still as possible until you get them safely to hospital,If it's obvious they have a broken leg, don't move them, but keep them in the position you found them in and phone an ambulance,If you suspect they have injured or broken his back, don't move him and phone an ambulance,Don't give the casualty anything to eat or drink, because they may need an anaesthetic (numbing medication) when they reach hospital.", "male", "English");
});

//code for bee bite 
onEvent("beeBite.btn", "click", function( ) {
  stopSound();
  setScreen("beeBite");
  playSpeech("If a honeybee stings you remove the stinger immediately with the edge of your fingernail or the edge of a credit card, this helps curb the amount of toxins released into your skin,Wash the sting site with soap and water,Icing the sting site is the most effective way to reduce venom absorption,It also can help reduce swelling,", "male", "English");
});
onEvent("back2home", "click", function() {
  stopSound();
  setScreen("home");
});
onEvent("button3", "click", function( ) {
  stopSound();
  setScreen("home");
});
onEvent("button2", "click", function( ) {
  stopSound();
  setScreen("home");
});
onEvent("button4", "click", function( ) {
	stopSound();
	setScreen("home");
});
//code for Nose bleeding
onEvent("nsBleeding.btn", "click", function( ) {
  stopSound();
  setScreen("nsBleeding");
  playSpeech("sit down and firmly pinch the soft part of your nose, just above your nostrils, for at least 10-15 minutes,Lean forward and breathe through your mouth,this will drain blood into your nose instead of down the back of your throat,place an ice pack or bag of frozen vegetables covered by a towel on the bridge of your nose", "male", "English");
});
onEvent("button5", "click", function( ) {
  stopSound();
  setScreen("home");
});
//code for Blood Vomiting 
onEvent("bldVmtng.btn", "click", function( ) {
  stopSound();
  setScreen("bldVmtng");
  playSpeech("Call an ambulance or go directly to the nearest emergency department,Be calm and reach and get medical help as soon as possible.", "male", "English");
});
//code for Ankle sprain
onEvent("anklSprn.btn", "click", function( ) {
  stopSound();
  setScreen("anklSprn");
  playSpeech("Rest the ankle,Compress (wrap) the ankle lightly not tightly with an elastic bandage or ankle brace,Go to the emergency room if you have any of the following symptoms:Severe pain, bruising, or severe swelling Bleeding, numbness, or change in color of the affected area Your ankle looks deformed or seems dislocated You can't put any weight on it", "male", "English");
});
onEvent("button1", "click", function( ) {
  stopSound();
  setScreen("home");
});
//code for Chest pain
onEvent("cstPn.btn", "click", function( ) {
  stopSound();
  setScreen("cstPn");
  playSpeech("Call ambulance or emergency medical assistance,Lie down in a comfortable position with your head up,If you have regular adult aspirin, chew one (as long as you are not allergic to aspirin),Chewing more than one will not do any good and may cause unwanted side effects.", "male", "English");
});
onEvent("button6", "click", function( ) {
  stopSound();
  setScreen("home");
});
onEvent("button7", "click", function( ) {
	stopSound();
	setScreen("home");
});
onEvent("button8", "click", function( ) {
	stopSound();
	setScreen("home");
});
//code for Choking
onEvent("ckng.btn", "click", function( ) {
	stopSound();
	setScreen("ckng");
	playSpeech("Give 5 back blows,Give 5 abdominal thrusts,Alternate between 5 blows and 5 thrusts","male","English");
});
onEvent("button9", "click", function( ) {
  stopSound();
	setScreen("home");
});
//code for Electric Shock 
onEvent("eltrcSHk.btn", "click", function( ) {
  stopSound();
  setScreen("eltrcSHK");
  playSpeech("Turn off the source of electricity if possible. If not then move the source away from you and the person using a dry nonconducting object made of cardboard plastic or wood,Begin CPR if the person shows no signs of circulation such as breathing coughing or movement,Try to prevent the injured person from becoming chilled", "male", "English");
});
//code for heart attack 
onEvent("hrtAtk.btn", "click", function( ) {
  stopSound();
  setScreen("hrtAtk");
 playSpeech("If you can't get an ambulance or emergency vehicle to come to you have a neighbor or a friend drive you to the nearest hospital Drive yourself only if you have no other option,Chew and swallow an aspirin while waiting for emergency help Aspirin helps keep your blood from clotting,Begin CPR if the person is unconscious. ", "male", "English");
});
onEvent("button11", "click", function( ) {
  stopSound();
	setScreen("home");
});
onEvent("button12", "click", function( ) {
  stopSound();
	setScreen("home");
});
onEvent("about", "click", function( ) {
  setScreen("About");
});

