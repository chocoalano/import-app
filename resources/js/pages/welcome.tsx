import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useRef } from "react";

declare global {
    interface Window {
        THREE: any;
        Globe: any;
    }
}

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Global Trade Solutions | Export Import">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-blue-950/20 to-zinc-900 dark:from-black dark:via-blue-950/30 dark:to-zinc-950">
                {/* Animated background stars */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{top: '10%', left: '20%', animationDelay: '0s'}}></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{top: '20%', left: '80%', animationDelay: '0.5s'}}></div>
                    <div className="absolute w-1 h-1 bg-blue-300 rounded-full animate-twinkle" style={{top: '40%', left: '10%', animationDelay: '1s'}}></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full animate-twinkle" style={{top: '60%', left: '90%', animationDelay: '1.5s'}}></div>
                    <div className="absolute w-1 h-1 bg-blue-200 rounded-full animate-twinkle" style={{top: '80%', left: '30%', animationDelay: '2s'}}></div>
                    <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{top: '15%', left: '50%', animationDelay: '0.3s'}}></div>
                    <div className="absolute w-0.5 h-0.5 bg-blue-100 rounded-full animate-twinkle" style={{top: '70%', left: '70%', animationDelay: '1.2s'}}></div>
                    <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle" style={{top: '30%', left: '60%', animationDelay: '0.8s'}}></div>
                </div>

                <div className="relative z-10 flex min-h-screen flex-col items-center p-6 text-white lg:p-8">
                    {/* HEADER */}
                    <header className="w-full max-w-7xl mb-12">
                        <nav className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-xl">
                                    GT
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">GlobalTrade</h2>
                                    <p className="text-xs text-zinc-400">Export • Import Solutions</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="inline-block rounded-lg border border-blue-500/30 bg-blue-500/10 px-6 py-2 text-sm font-medium text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/50 transition-all"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="inline-block px-6 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                                        >
                                            Sign In
                                        </Link>
                                        {canRegister && (
                                            <Link
                                                href={register()}
                                                className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/20"
                                            >
                                                Get Started
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>
                        </nav>
                    </header>

                    {/* HERO SECTION */}
                    <div className="w-full max-w-7xl flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 space-y-6 text-center lg:text-left z-20">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                                🌍 Connecting Global Markets
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                                    Global Trade
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    Simplified
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl">
                                Streamline your international trade operations with our comprehensive export-import solutions. Connect with verified suppliers and buyers worldwide.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                                <Link
                                    href={register()}
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
                                >
                                    Start Trading Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-zinc-700 text-zinc-300 font-semibold hover:bg-zinc-800/50 hover:border-zinc-600 transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch Demo
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 text-sm">
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">150+</div>
                                    <div className="text-zinc-500">Countries</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">50K+</div>
                                    <div className="text-zinc-500">Active Traders</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">$2B+</div>
                                    <div className="text-zinc-500">Trade Volume</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Globe (Fullscreen) */}
                        <div className="fixed inset-0 z-0 pointer-events-none">
                            <Globe />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.5); }
                }
                .animate-twinkle {
                    animation: twinkle 3s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}

/* ==========================
   GLOBE COMPONENT
========================== */

function Globe() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<any>(null);
    const sceneRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const controlsRef = useRef<any>(null);
    const globeRef = useRef<any>(null);

    useEffect(() => {
        if (!window.THREE) {
            console.error("Three.js belum dimuat!");
            return;
        }

        const container = containerRef.current;
        if (!container) return;

        // Wait for OrbitControls to load
        const initGlobe = () => {
            // Check if OrbitControls is available
            if (!(window as any).THREE.OrbitControls) {
                console.log("Waiting for OrbitControls...");
                setTimeout(initGlobe, 100);
                return;
            }

            const width = window.innerWidth;
            const height = window.innerHeight;

            // Setup Scene
            const scene = new window.THREE.Scene();
            sceneRef.current = scene;

            // Setup Camera with proper aspect ratio for fullscreen
            const camera = new window.THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
            camera.position.set(3, 0, 5.5); // Shifted to right (x=3) to avoid text overlap
            cameraRef.current = camera;

            // Setup Renderer
            const renderer = new window.THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = window.THREE.PCFSoftShadowMap;
            container.appendChild(renderer.domElement);
            rendererRef.current = renderer;

            // OrbitControls - now safe to use
            const OrbitControls = (window as any).THREE.OrbitControls;
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enableZoom = true;
            controls.enablePan = true;
            controls.minDistance = 3;
            controls.maxDistance = 10;
            controls.rotateSpeed = 0.5;
            controls.zoomSpeed = 0.8;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;
            controlsRef.current = controls;

            // Detect dark mode with listener for changes
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            let isDarkMode = darkModeQuery.matches;

            // Globe Sphere - Enhanced 3D with better depth
            const globeGeometry = new window.THREE.SphereGeometry(2, 256, 256);
            const globeMaterial = new window.THREE.MeshStandardMaterial({
                color: isDarkMode ? 0x0a0a0a : 0xe8f4f8,
                metalness: isDarkMode ? 0.3 : 0.1,
                roughness: isDarkMode ? 0.7 : 0.4,
                transparent: true,
                opacity: 0.85,
                side: window.THREE.DoubleSide,
                emissive: isDarkMode ? 0x0f0f0f : 0xd0e8f0,
                emissiveIntensity: isDarkMode ? 0.05 : 0.15,
                envMapIntensity: 1.5,
                depthWrite: true
            });
            const globe = new window.THREE.Mesh(globeGeometry, globeMaterial);
            globe.castShadow = true;
            globe.receiveShadow = true;
            scene.add(globe);
            globeRef.current = globe;

            // Enhanced Lighting Setup for better 3D depth
            const ambientLight = new window.THREE.AmbientLight(
                isDarkMode ? 0x404040 : 0xffffff,
                isDarkMode ? 0.4 : 1.2
            );
            scene.add(ambientLight);

            // Main directional light with shadows
            const mainLight = new window.THREE.DirectionalLight(
                isDarkMode ? 0xffffff : 0xffffff,
                isDarkMode ? 1.2 : 2.5
            );
            mainLight.position.set(8, 5, 8);
            mainLight.castShadow = true;
            mainLight.shadow.mapSize.width = 2048;
            mainLight.shadow.mapSize.height = 2048;
            mainLight.shadow.camera.near = 0.5;
            mainLight.shadow.camera.far = 50;
            scene.add(mainLight);

            // Fill light from opposite side
            const fillLight = new window.THREE.DirectionalLight(
                isDarkMode ? 0x4a6fa5 : 0x89d4ff,
                isDarkMode ? 0.6 : 0.8
            );
            fillLight.position.set(-8, -3, -8);
            scene.add(fillLight);

            // Rim light for edge definition
            const rimLight = new window.THREE.DirectionalLight(
                isDarkMode ? 0x2a4a7a : 0x4ca1ff,
                isDarkMode ? 0.8 : 1.2
            );
            rimLight.position.set(0, 5, -10);
            scene.add(rimLight);

            // Point light for depth
            const pointLight = new window.THREE.PointLight(
                isDarkMode ? 0x4ca1ff : 0x4ca1ff,
                isDarkMode ? 0.5 : 0.8,
                20
            );
            pointLight.position.set(3, 3, 3);
            scene.add(pointLight);

            // Create Galaxy/Space Particles Effect
            const starsGeometry = new window.THREE.BufferGeometry();
            const starCount = 3000;
            const positions = new Float32Array(starCount * 3);
            const colors = new Float32Array(starCount * 3);
            const sizes = new Float32Array(starCount);

            for (let i = 0; i < starCount; i++) {
                const i3 = i * 3;
                // Random position in sphere around globe
                const radius = 8 + Math.random() * 15;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);

                positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = radius * Math.cos(phi);

                // Random colors (white, blue, purple tints)
                const colorChoice = Math.random();
                if (colorChoice < 0.7) {
                    colors[i3] = 1;
                    colors[i3 + 1] = 1;
                    colors[i3 + 2] = 1;
                } else if (colorChoice < 0.85) {
                    colors[i3] = 0.3 + Math.random() * 0.7;
                    colors[i3 + 1] = 0.6 + Math.random() * 0.4;
                    colors[i3 + 2] = 1;
                } else {
                    colors[i3] = 0.6 + Math.random() * 0.4;
                    colors[i3 + 1] = 0.3 + Math.random() * 0.4;
                    colors[i3 + 2] = 1;
                }

                sizes[i] = Math.random() * 2 + 0.5;
            }

            starsGeometry.setAttribute('position', new window.THREE.BufferAttribute(positions, 3));
            starsGeometry.setAttribute('color', new window.THREE.BufferAttribute(colors, 3));
            starsGeometry.setAttribute('size', new window.THREE.BufferAttribute(sizes, 1));

            const starsMaterial = new window.THREE.PointsMaterial({
                size: 0.1,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                blending: window.THREE.AdditiveBlending,
                depthWrite: false
            });

            const starField = new window.THREE.Points(starsGeometry, starsMaterial);
            scene.add(starField);

            // Add nebula-like glow effect
            const nebulaGeometry = new window.THREE.SphereGeometry(12, 32, 32);
            const nebulaMaterial = new window.THREE.MeshBasicMaterial({
                color: isDarkMode ? 0x1a3a6e : 0x4ca1ff,
                transparent: true,
                opacity: 0.03,
                side: window.THREE.BackSide,
                blending: window.THREE.AdditiveBlending
            });
            const nebula = new window.THREE.Mesh(nebulaGeometry, nebulaMaterial);
            scene.add(nebula);

            // Function to update theme
            const updateTheme = (dark: boolean) => {
                isDarkMode = dark;
                // Update globe material
                globeMaterial.color.setHex(dark ? 0x0a0a0a : 0xe8f4f8);
                globeMaterial.metalness = dark ? 0.3 : 0.1;
                globeMaterial.roughness = dark ? 0.7 : 0.4;
                globeMaterial.emissive.setHex(dark ? 0x0f0f0f : 0xd0e8f0);
                globeMaterial.emissiveIntensity = dark ? 0.05 : 0.15;
                globeMaterial.needsUpdate = true;

                // Update lights
                ambientLight.color.setHex(dark ? 0x404040 : 0xffffff);
                ambientLight.intensity = dark ? 0.4 : 1.2;
                mainLight.color.setHex(0xffffff);
                mainLight.intensity = dark ? 1.2 : 2.5;
                fillLight.color.setHex(dark ? 0x4a6fa5 : 0x89d4ff);
                fillLight.intensity = dark ? 0.6 : 0.8;
                rimLight.color.setHex(dark ? 0x2a4a7a : 0x4ca1ff);
                rimLight.intensity = dark ? 0.8 : 1.2;
                pointLight.color.setHex(0x4ca1ff);
                pointLight.intensity = dark ? 0.5 : 0.8;

                // Update borders
                bordersGroup.children.forEach((child: any) => {
                    if (child.material) {
                        child.material.color.setHex(0x4ca1ff);
                        child.material.opacity = dark ? 0.95 : 1.0;
                        child.material.needsUpdate = true;
                    }
                });
            };

            // Listen for theme changes
            const themeChangeHandler = (e: MediaQueryListEvent) => {
                updateTheme(e.matches);
            };
            darkModeQuery.addEventListener('change', themeChangeHandler);

            // Country Borders Group
        const bordersGroup = new window.THREE.Group();
        scene.add(bordersGroup);

        // Fetch Countries Data
        fetch('/countries.json', {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                if (data.type === 'FeatureCollection' && data.features) {
                    data.features.forEach((feature: any) => {
                        if (feature.geometry && feature.geometry.coordinates) {
                            drawCountryBorders(feature, bordersGroup);
                        }
                    });
                    console.log(`✓ Loaded ${data.features.length} countries`);
                }
            })
            .catch(error => console.error('Error loading countries:', error));

        // Draw Country Borders
        function drawCountryBorders(feature: any, group: any) {
            const coordinates = feature.geometry.coordinates;

            function latLngToVector3(lng: number, lat: number, radius: number) {
                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lng + 180) * (Math.PI / 180);
                const x = -(radius * Math.sin(phi) * Math.cos(theta));
                const y = radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);
                return new window.THREE.Vector3(x, y, z);
            }

            function drawPolygon(coords: any[], radius: number) {
                if (coords.length < 2) return;

                const points: any[] = [];
                coords.forEach(coord => {
                    const [lng, lat] = coord;
                    points.push(latLngToVector3(lng, lat, radius));
                });

                const curve = new window.THREE.CatmullRomCurve3(points);
                const curvePoints = curve.getPoints(points.length * 2);
                const lineGeometry = new window.THREE.BufferGeometry().setFromPoints(curvePoints);
                const lineMaterial = new window.THREE.LineBasicMaterial({
                    color: 0x4ca1ff, // Blue color for coordinates
                    linewidth: 5,
                    opacity: isDarkMode ? 0.9 : 1.0,
                    transparent: true,
                    depthTest: true,
                    depthWrite: false
                });
                const line = new window.THREE.Line(lineGeometry, lineMaterial);
                group.add(line);
            }

            if (feature.geometry.type === 'Polygon') {
                drawPolygon(coordinates[0], 2.005);
            } else if (feature.geometry.type === 'MultiPolygon') {
                coordinates.forEach((polygon: any) => {
                    drawPolygon(polygon[0], 2.005);
                });
            }
        }

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        const onMouseMove = (event: MouseEvent) => {
            if (!controls.enabled) return;
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation Loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Update controls
            controls.update();

            // Rotate star field slowly
            starField.rotation.y += 0.0002;
            starField.rotation.x += 0.0001;

            // Pulse nebula
            nebula.rotation.y -= 0.0003;
            nebula.material.opacity = 0.02 + Math.sin(Date.now() * 0.001) * 0.01;

            // Subtle mouse parallax when not dragging
            if (!controls.enabled) {
                targetRotationX = mouseY * 0.1;
                targetRotationY = mouseX * 0.1;
                globe.rotation.x += (targetRotationX - globe.rotation.x) * 0.05;
                globe.rotation.y += (targetRotationY - globe.rotation.y) * 0.05;
            }

            // Render
            renderer.render(scene, camera);
        };
        animate();

        // Handle Window Resize - fullscreen
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Cleanup
        const cleanup = () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            darkModeQuery.removeEventListener('change', themeChangeHandler);
            controls.dispose();
            renderer.dispose();
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
        };

        return cleanup;
        };

        const cleanupFunction = initGlobe();

        // Return cleanup for outer useEffect
        return cleanupFunction;
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full pointer-events-auto"
            style={{
                width: '100%',
                height: '100%'
            }}
        />
    );
}
