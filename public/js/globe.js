// Pastikan THREE sudah ada
if (typeof THREE === "undefined") {
    console.error("THREE.js belum dimuat. Tambahkan CDN di HTML atau React.");
} else {
    const canvas = document.getElementById("globe-canvas");

    if (!canvas) {
        console.error("Canvas #globe-canvas tidak ditemukan!");
    } else {
        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            canvas.clientWidth / canvas.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 5);

        // Globe geometry
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4499ff,
            wireframe: false,
            shininess: 20,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambient = new THREE.AmbientLight(0x404040);
        scene.add(ambient);

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);

            // Rotasi globe
            globe.rotation.y += 0.003;

            renderer.render(scene, camera);
        }

        animate();
    }
}
