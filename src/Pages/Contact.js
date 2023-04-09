import React from "react";
import Navbar from "../Navbar";

const Contact = () => {
    return (
        <>
        <Navbar/>
        <div className="contact-content">
            <div id="uno">
                Wir bei Kiwicord freuen uns immer über Feedback und Fragen von unseren Mitgliedern und der Discord-Community. Wenn du eine Frage hast oder Hilfe benötigst, zögere bitte nicht, uns zu kontaktieren. Hier sind einige Möglichkeiten, wie du uns erreichen kannst:
            </div>
            <div id="doux">
                - Besuche unser Discord-Server und sende uns eine Direktnachricht oder eine Nachricht im öffentlichen Chat. Unsere Teammitglieder und Community-Moderatoren helfen gerne bei Fragen oder Problemen weiter.
            </div>
            <div id="trese">
                - Du kannst uns auch eine E-Mail an <a href='contact@kiwicord.de' target="_blank">contact@kiwicord.de</a> senden. Wir bemühen uns, alle E-Mails innerhalb von 24 Stunden zu beantworten.
            </div>
            <div id="quatro">
                - Wenn du uns auf anderen Social-Media-Plattformen folgen möchtest, findest du uns unter @kiwicord auf Twitter und Instagram. Dort posten wir regelmäßig Updates und Neuigkeiten zu Kiwicord und unseren Projekten.
            </div>
            <div id="longo">
                Vielen Dank für dein Interesse an Kiwicord. Wir freuen uns darauf, von dir zu hören!
            </div>
        </div>
        </>
    )
}

export default Contact;