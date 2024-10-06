let scene, camera, renderer;

function init() {
    // Создаем сцену
    scene = new THREE.Scene();

    // Создаем камеру
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Создаем рендерер
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('solar-system').appendChild(renderer.domElement);

    // Создаем освещение
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Загружаем 3D-модели планет
    const loader = new THREE.GLTFLoader();

    // Пример загрузки модели Земли
    loader.load('path/to/earth_model.glb', function (gltf) {
        const earth = gltf.scene;
        earth.scale.set(0.5, 0.5, 0.5); // Масштабируем модель
        scene.add(earth);
    });

    // Анимация
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    // Добавьте вращение планет
    scene.rotation.y += 0.01; // Вращаем сцену
    renderer.render(scene, camera);
}

window.onload = function () {
    init();
};

// Обработка клика для сравнения планет
document.getElementById('compareButton').addEventListener('click', function () {
    const result = "This feature is under construction. Comparison will show the sizes of the selected planets.";
    document.getElementById('comparisonResult').innerText = result;
});
