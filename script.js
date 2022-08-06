const elVideo = document.getElementById('video');

    navigator.getMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia)

    const cargaCamera = () =>{
        navigator.getMedia (
        // Restricciones (contraints) *Requerido
        {
        video: true,
        audio: false
        },
        // Funcion de finalizacion (Succes-Callback) *Requerido
       stream => elVideo.strObject = stream,
       console.error
        );
    }


    Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.ageGenderNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.tinyFaceDetector.loadFromUri('/models')
    ]).then(cargaCamera)
    

elVideo.addEventListener('play',() =>{
    const canvas = faceapi.createCanvasFromMedia(document.getElementById('elVideo'))
    document.body.append(canvas)
})