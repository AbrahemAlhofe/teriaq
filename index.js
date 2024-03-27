const $contactUs__thumbnail = document.querySelector("#contact-us .thumbnail");

for ( let i = 0; i <= 15; i += 1 ) {
    const $bar = document.createElement("div");
    $bar.classList.add("bar");
    $bar.innerText = "إتصل بنا ".repeat(20);
    $contactUs__thumbnail.appendChild($bar);
}
