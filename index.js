#!/usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const emoji = require("node-emoji");
const { white } = require("chalk");

// Text + chalk definitions
const data = {
    name: chalk.white("                   Magali Garot"),
    work: chalk.white("Junior Web Developer"),
    email: chalk.cyan("magali.garot@gmail.com"),
    github: chalk.cyan("https://github.com/MagaliGarot"),
    linkedin: chalk.cyan("https://www.linkedin.com/in/magali-garot/"),
    labelName: chalk.white.bold("  Name:"),
    labelWork: chalk.white.bold("💻  Work:"),

    labelEmail: chalk.white.bold("📧  Email:"),
    labelGitHub: chalk.white.bold("🐈  GitHub:"),
    labelLinkedIn: chalk.white.bold("📄  LinkedIn:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.white(
        boxen(
            [
                `${data.name}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelEmail} ${data.email}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
               
                EMPTYLINE,
            ].join(NEWLINE),
            {
                padding: 1,
                borderStyle: "double",
                backgroundColor: "#135D7D",
            },
        ),
    ),
);


