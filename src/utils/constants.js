import kbm from "../config/kaboom.js"

const constants = {
    width: kbm.width(),
    height: kbm.height(),
    speed: 300,
    gameDuration: 60,
    spaceshipCollisionCapacity: 5, // Must be a multiple of 5
    bullets: 12,
    startScreenText: "Aliens have started invading the planet Earth and HackerRank is in danger. It's only a matter of time until aliens take over HackerRank's office.",
    story: [
        {
            character: 'vaasavi',
            message: "Hariiii.... \nEarth is on the brink of destruction. Time is running out, and we must find a safe haven for HackerRank."
        },
        {
            character: 'hari',
            message: "What?? We must find a safe space but where can we go, Vaasavi?"
        },
        {
            character: 'vaasavi',
            message: "HackerSpace! The spaceship is prepared. You must take me and all the interns to that planet. It's our only chance for survival."
        },
        {
            character: 'hari',
            message: "That sounds like a plan, but I'll need someone to assist me in piloting the spaceship.\n Will you help me save HackerRank?"
        },
    ],
    cdnPath: "https://interns2024.pages.dev/assets/game"
};

export default constants;
