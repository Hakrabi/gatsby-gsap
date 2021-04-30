exports.onRouteUpdate = () => {
    if (typeof window !== `undefined`) { window.scrollTo(0, 0)}
}

exports.shouldUpdateScroll = args => {
    return false;
};

if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
    const scrollRestoration = window.history.scrollRestoration
}
