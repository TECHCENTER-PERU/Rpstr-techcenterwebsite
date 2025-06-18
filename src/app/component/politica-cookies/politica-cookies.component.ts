import { Component,ViewEncapsulation } from '@angular/core';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politica-cookies',
  imports: [NavbarColorComponent,FooterComponent, CommonModule],
  templateUrl: './politica-cookies.component.html',
  styleUrl: './politica-cookies.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PoliticaCookiesComponent {
  terminos = [
    {
      titulo: '1. Introducción',
      contenido: `
        <p>Nuestra web, https://techcenterperu.com (en adelante: «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.</p>
      `
    },
    {
      titulo: '2. ¿Qué son las cookies?',
      contenido: `
        <p>Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros apropiados durante una visita posterior.</p>
      `
    },
    {
      titulo: '3. ¿Qué son los scripts?',
      contenido: `
        <p>Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.</p>
      `
    },
    {
      titulo: '4. ¿Qué es una baliza web?',
      contenido: `
        <p>Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.</p>
      `
    },
    {
      titulo: '5. Cookies',
      contenido: `
        <p>Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.</p>
        <p>Estas webs pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.</p>

        <h4>5.1 Cookies técnicas o funcionales</h4>
        <p>Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu cesta de la compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.</p>

        <h4>5.2 Cookies de estadísticas</h4>
        <p>Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar cookies de estadísticas.</p>

        <h4>5.3 Cookies de marketing/seguimiento</h4>
        <p>Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.</p>

        <h4>5.4 Redes sociales</h4>
        <p>En nuestra web hemos incluido contenido de TikTok, Instagram, Facebook, Twitter, LinkedIn y WhatsApp para promover páginas web (p.ej.: «Me gusta», «Pinear») o compartir (p.ej.: «tuitear») en redes sociales como TikTok, Instagram, Facebook, Twitter, LinkedIn y WhatsApp. Este contenido está incrustado con código derivado de esas plataformas y guarda cookies. Este contenido podría procesar cierta información para anuncios personalizados.</p>

        <p>Por favor, lee la política de privacidad de estas redes sociales (que puede cambiar frecuentemente) para saber qué hacen con tus datos (personales) que procesan usando estas cookies. Los datos que reciben son anonimizados lo máximo posible. TikTok, Instagram, Facebook, Twitter, LinkedIn y WhatsApp están ubicados en los Estados Unidos.</p>
      `
    },
    {
      titulo: '6. Cookies usadas',
      contenido: `
        <p>A continuación se detallan las cookies que utilizamos en este sitio web:</p>

        <details>
          <summary><strong>Google reCAPTCHA</strong></summary>
          <p>Usamos Google reCAPTCHA para prevención de spam. <a href="https://cookiedatabase.org/service/google-recaptcha/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>Google Adsense</strong></summary>
          <p>Usamos Google Adsense para mostrar anuncios. <a href="https://cookiedatabase.org/service/google-adsense/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>Google Analytics</strong></summary>
          <p>Usamos Google Analytics para estadísticas del sitio web. <a href="https://cookiedatabase.org/service/google-analytics/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>Microsoft Clarity</strong></summary>
          <p>Se usa para distinguir a los usuarios y recopilar información de tráfico de forma anónima. Expira en 2 años. <a href="https://cookiedatabase.org/service/microsoft/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>Facebook</strong></summary>
          <p>Usamos Facebook para mostrar publicaciones sociales recientes y/o botones sociales para compartir en redes sociales. <a href="https://cookiedatabase.org/service/facebook/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>YouTube</strong></summary>
          <p>Usamos YouTube para mostrar video. <a href="https://cookiedatabase.org/service/youtube/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>Twitter</strong></summary>
          <p>Usamos Twitter para mostrar publicaciones sociales recientes y/o botones sociales para compartir en redes sociales. <a href="https://cookiedatabase.org/service/twitter/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>LinkedIn</strong></summary>
          <p>Usamos LinkedIn para mostrar publicaciones sociales recientes y/o botones sociales para compartir en redes sociales. <a href="https://cookiedatabase.org/service/linkedin/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>WhatsApp</strong></summary>
          <p>Usamos WhatsApp para soporte por chat. <a href="https://cookiedatabase.org/service/whatsapp/">Leer más</a></p>
        </details>

        <details>
          <summary><strong>TikTok</strong></summary>
          <p>Usamos TikTok para mostrar video. <a href="https://cookiedatabase.org/service/tiktok/">Leer más</a></p>
        </details>
      `
    },
    {
      titulo: '7. Tus derechos con respecto a los datos personales',
      contenido: `
        <p>Tienes los siguientes derechos con respecto a tus datos personales:</p>

        <ul>
          <li>Tiene derecho a saber por qué se necesitan tus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.</li>
          <li>Derecho de acceso: tienes derecho a acceder a tus datos personales que conocemos.</li>
          <li>Derecho de rectificación: tienes derecho a completar, rectificar, borrar o bloquear tus datos personales cuando lo desees.</li>
          <li>Si nos das tu consentimiento para procesar tus datos, tienes derecho a revocar dicho consentimiento y a que se eliminen tus datos personales.</li>
          <li>Derecho de cesión de tus datos: tienes derecho a solicitar todos tus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.</li>
          <li>Derecho de oposición: puedes oponerte al tratamiento de tus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.</li>
         </ul>

         <p>Para ejercer estos derechos, por favor, contacta con nosotros. Por favor, consulta los detalles de contacto en la parte inferior de esta política de cookies. Si tienes alguna queja sobre cómo gestionamos tus datos, nos gustaría que nos la hicieras saber, pero también tienes derecho a enviar una queja a la autoridad supervisora (la autoridad de protección de datos).</p>
        
      `
    },
    {
      titulo: '8. Datos de contacto',
      contenido: `
        <p>Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor, contacta con nosotros usando los siguientes datos de contacto:</p>
        <p>TECHCENTER - SOLUCIONES TECNOLOGICAS S.A.C.<br>AV. VICTOR LARCO 162 INT 403, URB. SAN ANDRES, TRUJILLO, TRUJILLO, LA LIBERTAD, PERU<br>Perú<br>Correo electrónico: hola@techcenterperu.com<br>Número de teléfono: +51 950 963 557</p>
        <p>Esta política de cookies se ha sincronizado con cookiedatabase.org el 13/11/2024.</p>
      `
    }
  ];

}
