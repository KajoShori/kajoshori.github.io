
    window.console = window.console || function(t) {};

	    onload = () => {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 1000);
    };