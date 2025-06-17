import { Component, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-terminos-y-condiciones',
  imports: [NavbarColorComponent, FooterComponent,CommonModule],
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrl: './terminos-y-condiciones.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TerminosYCondicionesComponent {
  terminos = [
    {
      titulo: '1. Introducción',
      contenido: `
        <p>Estos Términos y condiciones se aplican a este sitio web y a las transacciones relacionadas con nuestros productos y servicios. Usted puede estar obligado por contratos adicionales relacionados con su relación con nosotros o con cualquier producto o servicio que reciba de nosotros. Si alguna de las disposiciones de los contratos adicionales entra en conflicto con alguna de las disposiciones de estas Condiciones, las disposiciones de estos contratos adicionales prevalecerán.</p>
      `
    },
    {
      titulo: '2. Vinculación',
      contenido: `
        <p>Al registrarse en este sitio web, acceder a él o utilizarlo de cualquier otro modo, usted acepta someterse a las condiciones que se exponen a continuación. El mero uso de este sitio web implica el conocimiento y la aceptación de estos Términos y condiciones. En algunos casos particulares, también podemos pedirle que lo acepte explícitamente.</p>
      `
    },
    {
      titulo: '3. Comunicación electrónica',
      contenido: `
        <p>Al utilizar este sitio web o comunicarse con nosotros por medios electrónicos, usted acepta y reconoce que podemos comunicarnos con usted electrónicamente en nuestro sitio web o enviarle un correo electrónico, y acepta que todos los acuerdos, avisos, divulgaciones y otras comunicaciones que le proporcionemos electrónicamente satisfacen cualquier requisito legal, incluido, entre otros, el requisito de que dichas comunicaciones sean por escrito.</p>
      `
    },
    {
      titulo: '4. Propiedad intelectual',
      contenido: `
        <p>Nosotros o nuestros licenciantes poseemos y controlamos todos los derechos de autor y otros derechos de propiedad intelectual en el sitio web, y los datos, la información y otros recursos mostrados por o accesibles dentro del sitio web.<br><br>4.1 Todos los derechos están reservados<br><br>A menos que el contenido específico indique lo contrario, no se le concede una licencia ni ningún otro derecho en virtud de los derechos de autor, marcas comerciales, patentes u otros derechos de propiedad intelectual. Esto significa que usted no utilizará, copiará, reproducirá, ejecutará, mostrará, distribuirá, incrustará en cualquier medio electrónico, alterará, realizará ingeniería inversa, descompilará, transferirá, descargará, transmitirá, monetizará, venderá, comercializará o hará uso de cualquier recurso de este sitio web en cualquier forma, sin nuestro permiso previo por escrito, excepto y sólo en la medida en que se estipule lo contrario en normas de leyes obligatorias (como el derecho de cita).</p>
      `
    },
    {
      titulo: '5. Boletín de noticias',
      contenido: `
        <p>No obstante lo anterior, usted puede reenviar nuestro boletín de noticias en formato electrónico a otras personas que puedan estar interesadas en visitar nuestro sitio web.</p>
      `
    },
    {
      titulo: '6. Propiedad de terceros',
      contenido: `
        <p>Nuestro sitio web puede incluir hipervínculos u otras referencias a sitios web de terceros. No controlamos ni revisamos el contenido de los sitios web de terceros a los que se accede desde este sitio web. Los productos o servicios ofrecidos por otros sitios web estarán sujetos a los Términos y Condiciones aplicables de esos terceros. Las opiniones expresadas o el material que aparece en esos sitios web no son necesariamente compartidas o respaldadas por nosotros.<br><br>No seremos responsables de las prácticas de privacidad o del contenido de estos sitios. Usted asume todos los riesgos asociados al uso de estos sitios web y de cualquier servicio de terceros relacionado. No aceptaremos ninguna responsabilidad por cualquier pérdida o daño, sea cual sea la forma en que se produzca, que resulte de la divulgación por su parte de información personal a terceros.</p>
      `
    },
    {
      titulo: '7. Uso responsable',
      contenido: `
        <p>Al visitar nuestro sitio web, usted se compromete a utilizarlo sólo para los fines previstos y según lo permitido por estos Términos, cualquier contrato adicional con nosotros, y aplicables leyes, reglamentos y prácticas en línea generalmente aceptadas y directrices de la industria. No debe usar nuestro sitio web o nuestros servicios para utilizar, publicar o distribuir cualquier material que consista en (o esté vinculado a) software informático malicioso; utilizar los datos recogidos en nuestro sitio web para cualquier actividad de marketing directo, o llevar a cabo cualquier actividad de recopilación de datos sistemática o automatizada en o en relación con nuestro sitio web.<br><br>Está estrictamente prohibido realizar cualquier actividad que provoque o pueda provocar daños en el sitio web o que interfiera en su funcionamiento, disponibilidad o accesibilidad.</p>
      `
    },
    {
      titulo: '8. Registro',
      contenido: `
        <p>Puede registrarse para obtener una cuenta en nuestro sitio web. Durante este proceso, es posible que se le pida que elija una contraseña. Usted es responsable de mantener la confidencialidad de las contraseñas y la información de la cuenta y se compromete a no compartir sus contraseñas, la información de la cuenta o el acceso seguro a nuestro sitio web o servicios con ninguna otra persona. No debe permitir que ninguna otra persona use su cuenta para acceder al sitio web porque usted es responsable de todas las actividades que ocurren a través del uso de sus contraseñas o cuentas.  Debe notificarnos inmediatamente si tiene conocimiento de la divulgación de su contraseña.<br><br>Después de la cancelación de la cuenta, usted no intentará registrar una nueva cuenta sin nuestro permiso.</p>
      `
    },
    {
      titulo: '9. Envío de ideas',
      contenido: `
        <p>No envíe ideas, inventos, trabajos de autoría u otra información que pueda considerarse su propia propiedad intelectual y que le gustaría presentarnos, a menos que primero hayamos firmado un acuerdo con respecto a la propiedad intelectual o un acuerdo de no divulgación.  Si nos lo comunica en ausencia de dicho acuerdo por escrito, nos concede una licencia mundial, irrevocable, no exclusiva y libre de derechos de autor para utilizar, reproducir, almacenar, adaptar, publicar, traducir y distribuir su contenido en cualquier medio existente o futuro.</p>
      `
    },
    {
      titulo: '10. Terminación de uso',
      contenido: `
        <p>Podemos, a nuestra entera discreción, modificar o interrumpir en cualquier momento el acceso, temporal o permanentemente, al sitio web o a cualquier Servicio del mismo. Usted acepta que no seremos responsables ante usted ni ante ningún tercero por cualquier modificación, suspensión o interrupción de su acceso o uso del sitio web o de cualquier contenido que pueda haber compartido en el sitio web. Usted no tendrá derecho a ninguna compensación ni a ningún otro pago, ni siquiera si se pierden de forma permanente determinadas funciones, configuraciones y/o cualquier Contenido con el que haya contribuido o en el que haya confiado. No debe eludir o evitar, o intentar eludir o evitar, cualquier medida de restricción de acceso en nuestro sitio web.</p>
      `
    },
    {
      titulo: '11. Garantías y responsabilidad',
      contenido: `
        <p>Nada de lo dispuesto en esta sección limitará o excluirá cualquier garantía implícita por ley que fuera ilegal limitar o excluir. Este sitio web y todo su contenido se proporcionan "tal cual" y "según disponibilidad" y pueden incluir inexactitudes o errores tipográficos. Renunciamos expresamente a toda garantía de cualquier tipo, ya sea expresa o implícita, en cuanto a la disponibilidad, precisión o integridad del Contenido. No garantizamos que:</p>

        <ul>
          <li>este sitio web o nuestros contenidos cumplirán con sus necesidades;</li>
          <li>este sitio web estará disponible de forma ininterrumpida, oportuna, segura o sin errores.</li>
        </ul>

        <br><p>Nada de lo contenido en este sitio web constituye o pretende constituir un asesoramiento jurídico, financiero o médico de ningún tipo. Si necesita asesoramiento, debe consultar a un profesional adecuado.</p>

        <p>Las siguientes disposiciones de esta sección se aplicarán en la medida máxima permitida por la ley aplicable y no limitarán ni excluirán nuestra responsabilidad con respecto a cualquier asunto que sería ilícito o ilegal para nosotros limitar o excluir nuestra responsabilidad.</p>

        <p>En ningún caso seremos responsables de cualquier daño directo o indirecto (incluyendo cualquier daño por pérdida de beneficios o ingresos, pérdida o corrupción de datos, software o base de datos, o pérdida o daño a la propiedad o a los datos) incurridos por usted o por cualquier tercero, que surja de su acceso o uso de nuestro sitio web.</p>

        <p>Salvo en la medida en que cualquier contrato adicional establezca expresamente lo contrario, nuestra responsabilidad máxima hacia usted por todos los daños que surjan o estén relacionados con el sitio web o con cualquier producto o servicio comercializado o vendido a través del sitio web, independientemente de la forma de acción legal que imponga la responsabilidad (ya sea por contrato, equidad, negligencia, conducta intencionada, agravio o cualquier otra forma) se limitará al precio total que usted nos pagó para comprar dichos productos o servicios o utilizar el sitio web. Dicho límite se aplicará en conjunto a todas sus reclamaciones, acciones y causas de acción de cualquier tipo y naturaleza.</p>
      `
    },
    {
      titulo: '12. Privacidad',
      contenido: `
        <p>Para acceder a nuestro sitio web y/o servicios, es posible que se le pida que proporcione cierta información sobre usted como parte del proceso de registro. Usted se compromete a que toda la información que proporcione sea siempre precisa, correcta y actualizada.<br><br>Hemos desarrollado una política para abordar cualquier preocupación sobre la privacidad que pueda tener. Para más información, consulte nuestra Declaración de privacidad y nuestra Política de cookies.</p>
      `
    },
    {
      titulo: '13. Accesibilidad',
      contenido: `
        <p>Nos comprometemos a que los contenidos que ofrecemos sean accesibles para las personas con discapacidad. Si tiene una discapacidad y no puede acceder a cualquier parte de nuestro sitio web debido a su discapacidad, le pedimos que nos avise incluyendo una descripción detallada del problema que ha encontrado. Si el problema es fácilmente identificable y se puede resolver de acuerdo con las herramientas y técnicas de la tecnología de la información estándar del sector, lo resolveremos rápidamente.</p>
      `
    },
    {
      titulo: '14. Restricciones a la exportación / Cumplimiento legal',
      contenido: `
        <p>Se prohíbe el acceso al sitio web desde territorios o países donde el Contenido o la compra de los productos o Servicios vendidos en el sitio web es ilegal.  No puede utilizar este sitio web infringiendo las leyes y reglamentos de exportación de Peru.</p>
      `
    },
    {
      titulo: '15. Marketing de afiliados',
      contenido: `
        <p>A través de este sitio web podemos realizar actividades de marketing de afiliación por las que recibimos un porcentaje o una comisión por la venta de servicios o productos en este sitio web o a través de él. También podemos aceptar patrocinios u otras formas de compensación publicitaria de empresas. Esta información pretende cumplir con los requisitos legales sobre marketing y publicidad que puedan ser de aplicación, como las normas de la Comisión Federal de Comercio de Estados Unidos.</p>
      `
    },
    {
      titulo: '16. Asignación y cesiones',
      contenido: `
        <p>Usted no puede ceder, transferir o subcontratar ninguno de sus derechos y/u obligaciones en virtud de estos Términos y condiciones, en su totalidad o en parte, a ningún tercero sin nuestro consentimiento previo por escrito. Cualquier supuesta cesión en violación de esta Sección será nula y sin efecto.</p>
      `
    },
    {
      titulo: '17. Incumplimientos de estos Términos y condiciones',
      contenido: `
        <p>Sin perjuicio de los demás derechos que nos asisten en virtud de los presentes Términos y Condiciones, si usted incumple estos Términos y Condiciones de cualquier manera, podremos tomar las medidas que consideremos oportunas para hacer frente al incumplimiento, incluyendo la suspensión temporal o permanente de su acceso al sitio web, poniéndonos en contacto con su proveedor de servicios de Internet para solicitarle que bloquee su acceso al sitio web, y/o iniciar acciones legales contra usted.</p>
      `
    },
    {
      titulo: '18. Fuerza mayor (Force majeure)',
      contenido: `
        <p>Excepto en el caso de las obligaciones de pago de dinero, ningún retraso, fallo u omisión por parte de cualquiera de las partes en el cumplimiento o la observancia de cualquiera de sus obligaciones en virtud del presente documento se considerará un incumplimiento de estos Términos y condiciones si, y mientras, dicho retraso, fallo u omisión se deba a una causa más allá del control razonable de dicha parte.</p>
      `
    },
    {
      titulo: '19. Indemnización',
      contenido: `
        <p>Usted se compromete a indemnizarnos, defendernos y eximirnos de toda reclamación, responsabilidad, daños, pérdidas y gastos, relacionados con la violación de estas condiciones y de las leyes aplicables, incluidos los derechos de propiedad intelectual y los derechos de privacidad. Usted nos reembolsará sin demora los daños, pérdidas, costes y gastos relacionados con dichas reclamaciones o derivados de ellas.</p>
      `
    },
    {
      titulo: '20. Renuncia',
      contenido: `
        <p>El incumplimiento de cualquiera de las disposiciones establecidas en estos Términos y condiciones y en cualquier Acuerdo, o la falta de ejercicio de cualquier opción de interrupción, no se interpretará como una renuncia a dichas disposiciones y no afectará a la validez de estos Términos y Condiciones o de cualquier Acuerdo o cualquier parte del mismo, ni al derecho posterior de hacer cumplir todas y cada una de las disposiciones.</p>
      `
    },
    {
      titulo: '21. Idioma',
      contenido: `
        <p>Estos Términos y Condiciones se interpretarán y analizarán exclusivamente en Español; castellano. Todas las notificaciones y la correspondencia se redactarán exclusivamente en ese idioma.</p>
      `
    },
    {
      titulo: '22. Acuerdo completo',
      contenido: `
        <p>Estos términos y condiciones, junto con nuestra declaración de privacidad y nuestra política de cookies, constituyen el acuerdo completo entre TECH CENTER-SOLUCIONES TECNOLOGICAS S.A.C. - TECHCENTER S.A.C. y tú en relación con tu uso de esta web.</p>
      `
    },
    {
      titulo: '23. Actualización de los presentes Términos y Condiciones',
      contenido: `
        <p>Es posible que actualicemos estos Términos y Condiciones de vez en cuando.  Es su obligación revisar periódicamente estos Términos y Condiciones para ver si hay cambios o actualizaciones. La fecha indicada al principio de estas Condiciones Generales es la última fecha de revisión. Los cambios a estos Términos y Condiciones entrarán en vigencia cuando dichos cambios se publiquen en este sitio web.  El uso continuado de este sitio web tras la publicación de cambios o actualizaciones se considerará un aviso de su aceptación de cumplir y estar sujeto por estos Términos y Condiciones.</p>
      `
    },
    {
      titulo: '24. Elección de ley y jurisdicción',
      contenido: `
        <p>Estos Términos y Condiciones se regirán por las leyes de Peru. Cualquier disputa relacionada con estos Términos y Condiciones estará sujeta a la jurisdicción de los tribunales de Peru.  Si un tribunal u otra autoridad considera que alguna parte o disposición de estos Términos y Condiciones es inválida y/o inaplicable en virtud de la legislación vigente, dicha parte o disposición será modificada, eliminada y/o aplicada en la mayor medida permitida para hacer efectiva la intención de estos Términos y Condiciones.  Las demás disposiciones no se verán afectadas.</p>
      `
    },
    {
      titulo: '25. Información del contacto',
      contenido: `
        <p>Este sitio web es propiedad y está gestionado por TECH CENTER-SOLUCIONES TECNOLOGICAS S.A.C. - TECHCENTER S.A.C.<br><br>Puedes contactar con nosotros en relación a estos términos y condiciones escribiéndonos o enviándonos un correo electrónico a la siguiente dirección: hola@techcenterperu.com<br>AV VICTOR LARCO 162 INT 403 URB. SAN ANDRES</p>
      `
    },
    {
      titulo: '26. Descargar',
      contenido: `
        <p>También puedes descargar nuestros términos y condiciones como un PDF.</p>
      `
    },
  ];

  descargarPDF() {
    window.open('/assets/terminos-y-condiciones.pdf', '_blank');
  }
}