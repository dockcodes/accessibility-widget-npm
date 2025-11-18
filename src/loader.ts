export function loadWidgetScript(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject("Missing widget token");
            return;
        }

        const script = document.createElement("script");
        script.src = `//wcag.dock.codes/accessibility/${token}/start.js`;
        script.async = true;
        script.onload = () => {
            const interval = setInterval(() => {
                if (typeof window.accessibility?.emit === 'function') {
                    clearInterval(interval);
                    resolve();
                }
            })
        }
        script.onerror = reject;

        document.head.appendChild(script);
    });
}
