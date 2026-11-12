
// =================================
// NEXUSHUB - DYNAMIC PAGE RENDERING
// =================================

function renderCards(containerId, items, options = {}) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.replaceChildren();

    items.forEach(item => {
        const column = document.createElement("div");
        column.className = options.columnClass || "col-md-6 col-lg-4";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm p-3";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = item.title || item.name;

        card.appendChild(title);

        if (item.category) {
            const category = document.createElement("p");
            category.className = "text-muted";
            category.textContent = item.category;
            card.appendChild(category);
        }

        if (item.description) {
            const description = document.createElement("p");
            description.className = "card-text";
            description.textContent = item.description;
            card.appendChild(description);
        }

        if (item.status) {
            const status = document.createElement("span");
            status.className = "badge bg-success";
            status.textContent = item.status;
            card.appendChild(status);
        }

        if (item.link) {
            const link = document.createElement("a");
            link.href = item.link;
            link.className = "btn btn-success mt-3";
            link.textContent = "Explore";
            card.appendChild(link);
        }

        column.appendChild(card);
        container.appendChild(column);
    });
}


// =================================
// EVENTS PAGE
// =================================

renderCards("upcoming-events-container", upcomingEvents);
renderCards("past-events-container", pastEvents);


// =================================
// TECHNICAL RESOURCES PAGE
// =================================

renderCards("technical-resources-container", technicalResources);


// =================================
// NON-TECHNICAL RESOURCES PAGE
// =================================

renderCards("non-technical-resources-container", nonTechnicalResources);


// =================================
// UPDATES PAGE
// =================================

renderCards("updates-container", updates);


// =================================
// RESOURCES PAGE
// =================================

renderCards("resource-categories-container", resourceCategories);


// =================================
// HOMEPAGE
// =================================

renderCards("home-resources-container", homeContent);


// =================================
// EXPLORE PAGE - OBJECTIVES
// =================================

renderCards("objectives-container", objectives);


// =================================
// EXPLORE PAGE - FAQS
// =================================

function renderFAQs() {
    const container = document.getElementById("faq-container");

    if (!container) return;

    container.replaceChildren();

    faqs.forEach((faq, index) => {
        const item = document.createElement("div");
        item.className = "accordion-item";

        const heading = document.createElement("h2");
        heading.className = "accordion-header";

        const button = document.createElement("button");
        button.className = "accordion-button collapsed";
        button.type = "button";
        button.textContent = faq.question;
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", `#faq-answer-${index}`);

        const answer = document.createElement("div");
        answer.id = `faq-answer-${index}`;
        answer.className = "accordion-collapse collapse";

        const body = document.createElement("div");
        body.className = "accordion-body";
        body.textContent = faq.answer;

        answer.appendChild(body);
        heading.appendChild(button);
        item.appendChild(heading);
        item.appendChild(answer);

        container.appendChild(item);
    });
}

renderFAQs();
