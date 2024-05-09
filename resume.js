// document.getElementById("downloadBtn").addEventListener("click", function() {
//     // Replace "resume.pdf" with the path to your resume file
//     var url = "C:\Users\dell\Downloads\Priyanka resume final (1).pdf";

//     // Creating a temporary anchor element to initiate the download
//     var link = document.createElement("a");
//     link.href = url;
//     link.download = "YourResumeFileName.pdf";
    
//     // Simulating a click on the anchor element to trigger download
//     document.body.appendChild(link);
//     link.click();

//     // Cleanup
//     document.body.removeChild(link);
// });

function downloadResume() {
    // Replace "path_to_your_resume_file.pdf" with the path to your resume file
    var url = "https://drive.google.com/uc?export=download&id=17wQrZwqZYfcnSC2oOH5QFuxU1a3S0CtX";
    
    // Initiating the download using anchor element
    var link = document.createElement("a");
    link.href = url;
    link.download = "YourResumeFileName.pdf";
    link.click();
}