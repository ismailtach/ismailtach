/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen =
            navLinks.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    document
        .querySelectorAll(".nav-links a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


/* =========================================
   AI ASSISTANT
========================================= */

const aiButton =
    document.getElementById("aiButton");

const aiChat =
    document.getElementById("aiChat");

const closeAi =
    document.getElementById("closeAi");

const aiForm =
    document.getElementById("aiForm");

const aiInput =
    document.getElementById("aiInput");

const aiMessages =
    document.getElementById("aiMessages");


/* Open AI */

if (aiButton && aiChat) {

    aiButton.addEventListener("click", function () {

        aiChat.classList.toggle("open");

        if (aiChat.classList.contains("open")) {

            setTimeout(function () {

                aiInput.focus();

            }, 100);

        }

    });

}


/* Close AI */

if (closeAi && aiChat) {

    closeAi.addEventListener("click", function () {

        aiChat.classList.remove("open");

    });

}


/* =========================================
   ADD AI MESSAGE
========================================= */

function addAiMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        "ai-message " + type;

    message.innerHTML =
        text;

    aiMessages.appendChild(message);

    aiMessages.scrollTop =
        aiMessages.scrollHeight;
}


/* =========================================
   AI RESPONSE
========================================= */

function getAiResponse(question) {

    const text =
        question.toLowerCase().trim();


    /* SERVICES */

    if (
        text.includes("service") ||
        text.includes("what do you do") ||
        text.includes("offer")
    ) {

        return `
            I can help with:
            <br><br>
            🌐 Website Development<br>
            🛒 E-Commerce<br>
            ⚡ Web Applications<br>
            📱 Responsive Design<br>
            🤖 AI Integration<br>
            🎨 UI/UX Design
            <br><br>
            Tell me what you want to build.
        `;

    }


    /* WEBSITE */

    if (
        text.includes("website") ||
        text.includes("web site") ||
        text.includes("webpage")
    ) {

        return `
            Great! 🌐 I can build a professional,
            responsive website for your business.
            <br><br>
            I can create business websites,
            portfolios, landing pages and custom
            websites.
            <br><br>
            Click <b>Start a Project</b> or use
            the contact form to send your idea.
        `;

    }


    /* E-COMMERCE */

    if (
        text.includes("ecommerce") ||
        text.includes("e-commerce") ||
        text.includes("online store") ||
        text.includes("shop")
    ) {

        return `
            🛒 Yes! I can create an online store
            for your business.
            <br><br>
            It can include products, categories,
            shopping cart, checkout and responsive
            design.
            <br><br>
            Tell me what you want to sell.
        `;

    }


    /* AI */

    if (
        text.includes(" ai") ||
        text.startsWith("ai") ||
        text.includes("artificial intelligence") ||
        text.includes("chatbot")
    ) {

        return `
            🤖 AI features can be added to a website
            or web application.
            <br><br>
            Examples include AI assistants,
            customer support, automation and
            intelligent search.
            <br><br>
            Tell me what you want the AI to do.
        `;

    }


    /* PRICE */

    if (
        text.includes("price") ||
        text.includes("cost") ||
        text.includes("how much") ||
        text.includes("budget")
    ) {

        return `
            💰 Project pricing depends on the
            features and requirements.
            <br><br>
            Send your project details through the
            contact form and I can review what
            you need.
        `;

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("talk") ||
        text.includes("message")
    ) {

        return `
            📩 You can contact Ismail through
            the Contact section.
            <br><br>
            You can also send a project request
            directly through the website form.
        `;

    }


    /* HELLO */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            👋 Hello!
            <br><br>
            I'm Ismail's website assistant.
            How can I help you?
            <br><br>
            You can ask about websites,
            e-commerce, AI, services or pricing.
        `;

    }


    /* DEFAULT */

    return `
        Thanks for your message! 👍
        <br><br>
        I can help you with:
        <br><br>
        🌐 Websites<br>
        🛒 E-Commerce<br>
        ⚡ Web Applications<br>
        🤖 AI Solutions<br>
        💰 Project Pricing
        <br><br>
        Or go to the Contact section and
        send your project details.
    `;

}


/* =========================================
   AI FORM
========================================= */

if (aiForm) {

    aiForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const question =
            aiInput.value.trim();

        if (!question) {
            return;
        }


        addAiMessage(
            question,
            "user"
        );


        aiInput.value = "";


        setTimeout(function () {

            const response =
                getAiResponse(question);

            addAiMessage(
                response,
                "bot"
            );

        }, 400);

    });

}


/* =========================================
   QUICK QUESTIONS
========================================= */

document
    .querySelectorAll(".ai-suggestions button")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.getAttribute(
                        "data-question"
                    );

                addAiMessage(
                    question,
                    "user"
                );


                setTimeout(function () {

                    const response =
                        getAiResponse(question);

                    addAiMessage(
                        response,
                        "bot"
                    );

                }, 400);

            }
        );

    });


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();

            const email =
                document.getElementById(
                    "email"
                ).value.trim();

            const project =
                document.getElementById(
                    "project"
                ).value;

            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            /*
             * FREE METHOD
             *
             * No paid backend is required.
             *
             * The form prepares an email message
             * using the visitor's email application.
             */

            const subject =
                encodeURIComponent(
                    "New Project Request - Ismail Web Engineer"
                );


            const body =
                encodeURIComponent(
`Hello Ismail,

I would like to discuss a project.

Name: ${name}

Email: ${email}

Project Type: ${project}

Project Details:
${message}

Thank you.`
                );


            const emailLink =
                "mailto:ismail@example.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;


            formMessage.textContent =
                "Opening your email app...";


            window.location.href =
                emailLink;

        }
    );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealItems =
    document.querySelectorAll(
        ".service-card, .project-card, .process-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    revealItems.forEach(function (item) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(20px)";

        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(item);

    });

}
