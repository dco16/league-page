/*   STEP 1   */
export const leagueID = "721517056041775104"; // your league ID
export const leagueName = "Gluck’s Delusions of Grandeur"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <h1> Week 13: The Tiananmen Square of the Playoff Race</h1>
  <p>Heading into the week, we’ve seen a shift in standings since the middle of the season. 2 Patts 1 Kupp has dominated for the majority of the season. Not far behind is Burrowing in that coochie and The Beef Empire. Below those three squads is where the playoff conversation gets interesting. Gluck Gluck 9000 and grayspencer21 (change your username bro) are tied up at 7-5. Grayspencer21 has fallen off the bandwagon a little since the middle of the season where he was bouncing between the number 3 and 4 spot. Gluck Gluck 9000 is on a hot streak recently with 4 wins over the top 3 teams to put him at 7-5. That being said, both those squads are only one game ahead of keving44. </p>
  <p>Still in the playoff hunt is Still: Vol.1, Cee Deez Nutz and Majd. These three squads are gonna need big wins this week to keep their playoff hopes alive. Still Bill: Vol.1 is up against Gluck Gluck 9000 who’s projected at a 71% chance of taking the W. Both squads strong at wide receiver and weak at running back, the matchup might come down to who’s RB2 outruns the other. Gluck Gluck 9000 has Devin Singletary while Still Bill: vol.1 has Boston Scott. Boston Scott questionable with (illness) is gonna need to be in full strength if Still Bill wants to complete this week. The next close matchup is Majd vs Anish. Majd is projected to take the win at 55%. Majd needs a win here to stay in the playoff race. He could improve his chances if he started his second quarterback. I guess we will find out. This matchup could also come down to receiver play. With D.K Metcalf limited in practice and Josh Jacobs on the injury report, it will be interesting to see if these guys go full throttle come Sunday. Lastly, we have the matchup of the week between Kevin44 and The Beef Empire. A win for Kevin44 could secure his playoff hopes this week. To get that win he’s gonna have to go through Joe Mixon and The Beef of Johnson. This game might just come down to the Flexes and we will see if The Beefs show up or not. Keep a close eye on this game as it also affects the playoff bye situation. With Burrowing in that coochie ahead of The Beef by a significant FPTS count, The Beef needs a win this week to stay in the first-round bye conversation. That being said if Cuba doesn’t burrow deep into some coochie this week and  Cees Deez Nutz slap him in the face with an upset, then the door to the first-round bye is wide open. The outcome of this week will be a huge factor in the playoff picture that is shaping up to be an absolute thriller. </p>
  <p>The mighty will fall and hitting the lottery in the draft will be necessary. It is easy to draft cool and calm like Billy(fuck this kids unroastable). But it is tempting to gamble like Grady, which may leave you sleeping on the couch for years.</p>
  <p>Winning is the ultimate goal. You may get "lucky" once every 20 years like Perez, but as Dylan's cock has learned from experience, it is a bloodbath to get a ring.</p>
 
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Your Name",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Your Name",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Brooklyn", // (optional)
      "bio": "Lorem ipsum...",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Rival", // Can be anything (usually your rival's name)
        link: 6, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
