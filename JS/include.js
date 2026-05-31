// ===============================
// Load HTML Component
// ===============================

async function loadComponent(id, filePath) {
    try {

        const element = document.getElementById(id);

        if (!element) {
            console.error(`Container not found: ${id}`);
            return;
        }

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(
                `Failed to load ${filePath}`
            );
        }

        const html = await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.error(error);

    }
}


// ===============================
// Load All Components
// ===============================

window.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "navbar-container",
        "../components/navbar.html"
    );

    await loadComponent(
        "mega-menu-container",
        "../components/mega-menu.html"
    );

    await loadComponent(
    "location-compo-container",
    "../components/locationC.html"
    );

    await loadComponent(
        "insuranceC-container",
        "../components/insuranceCompo.html"
    );

    await loadComponent(
        "footer-container",
        "../components/footer.html"
    );

    window.dispatchEvent(
    new Event('componentsLoaded')
    );


    // ===================================
    // Initialize Scripts AFTER Loading
    // ===================================

    if (typeof initMegaMenu === "function") {
        initMegaMenu();
    }

    if (typeof initServicesCarousel === "function") {
        initServicesCarousel();
    }

    if (typeof initTeamCarousel === "function") {
        initTeamCarousel();
    }

    if (typeof initAnimations === "function") {
        initAnimations();
    }

});