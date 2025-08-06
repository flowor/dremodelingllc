<script>
	import { DESIGNER_URL, EMAIL, PHONENUMBER_DISPLAY, PHONENUMBER_HREF } from '$lib/consts';
  import { AccordionItem, Accordion } from 'flowbite-svelte';
	import ArrowUp from '../../icons/ArrowUp.svelte';
	import ArrowDown from '../../icons/ArrowDown.svelte';
	import banner from '$lib/assets/banner.jpg';
  
  const modelerUrl = DESIGNER_URL;
	let description = "Frequently asked questions regarding our metal structures and billing procedures.";

</script>
<svelte:head>
	<title>Diaz Remodelling LLC - FAQ</title>
  <meta name="description" content="{description}">
	<meta property="og:description" content="{description}"/>
	<meta property="og:image" content="{banner}"/>
</svelte:head>

<div class="text-center slide-fade-in-animation p-4"><h1 class="block mt-6 text-4xl leading-tight font-medium">FAQ</h1></div>
<div class="max-w-screen-lg mx-auto p-5">

  <section class="text-left">
    <h2 class="text-2xl mb-2">General</h2>
    <Accordion>
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">What role do we play as dealers?</span>
        <p class="text-gray-700 dark:text-gray-400">
          Diaz Remodelling LLC acts as the bridge that connects the customer and manufacturer. We help the customer by providing pricing, information and customization of metal buildings that meet your needs. We are an authorized dealer for TOL Buildings.
        </p>
      </AccordionItem>
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">How can I understand the layout and size of the buildings?</span>
        <p class="text-gray-700 dark:text-gray-400">
          Our buildings are divided into five different categories, their dimensions are identified by Width X Length X Height i.e (20X40X9) which indicates a 20 feet wide, 40 feet long, and 9 feet high building. Each carport has customizable components and additions. Please use our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{modelerUrl}">3D design tool to learn more!</a> 
        </p>
      </AccordionItem>
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">What size building should I order?</span>
        <p class="mb-2 text-gray-700 dark:text-gray-400">Selecting the correct size for your metal building is crucial and depends on your intended use and desired layout. Here are some key factors to consider when determining the ideal size for your needs:</p>
        <ul class="list-disc ps-5 dark:text-gray-400 text-gray-700">
          <li>
            <strong>Terrain:</strong> You will need to consider the size of your metal building and your desired location. You will need to think about leveling the surface (if needed), clearing out land (if needed), pouring a foundation (if needed), etc.  
          </li>
          <li>
            <strong>Purpose:</strong> Please browse through our products category to carefully review each building type and its purpose. We recommend using our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{modelerUrl}">3D design tool</a> to customize a metal building that meets your needs. 
          </li>
          <li>
            <strong>Budget:</strong> Diaz Remodelling LLC prides itself on pricing transparency. Our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{modelerUrl}">3D design tool</a> will give you accurate pricing of your own metal structure. 
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Do I need a building permit prior to installation? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Certain municipalities and local code enforcement agencies may mandate a building permit for the construction of a metal building within their jurisdiction. It is advisable to consult your local building department prior to undertaking a metal building project. We recommend visiting your local building department for more information. We are committed to working with our customers to provide as much information as possible about building permit requirements. Please don’t hesitate to contact us if you have any questions, as we are committed to collaborating with our customers to provide as much information as possible about building permit requirements.
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Can I customize my own metal building? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Absolutely! We recommend using our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{modelerUrl}">3D tool</a> which provides you with all options and gives you precise costing. You can specify the size, design, and roof style required for your building. We offer selections for metal framing and paneling gauges, colors, trim, gables, wind/snow certification, and more. Your metal building can be tailored exactly to your preferences! 
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Do I need to prepare prior to the installation of my metal building?</span>
        <p class="text-gray-700 dark:text-gray-400">
          There are a few preparations you'll need to make to ensure your site is ready beforehand. As previously mentioned, it is your responsibility to obtain any necessary building permits. Additionally, you should ensure your site is level, cleared of debris, and easily accessible for our installation crew. If you have any other questions about preparing your site, feel free to ask! Learn more about our <a href="../info-hub#order-process" class="underline hover:text-ssdblue-950 text-ssdblue-700">Order Process</a>
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Is there any cost associated with delivery and installation? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Your metal building will be delivered and installed without any extra charges by fast and efficient professionals! 
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">How long will it take to get my metal building installed? </span>
        <p class="text-gray-700 dark:text-gray-400">
          We pride ourselves with having the best and fastest delivery times, please see our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="info-hub/#coverage-area">coverage area map</a> for the most up to date information about delivery times. 
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">I customized a building using the 3D Design tool, will my building look just like that? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Most certainly! We've teamed up with the best <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{modelerUrl}">3D design tool</a> around to give you the most precise and easy-to-use design experience. Whatever you've crafted using our tool will translate faithfully to your actual building.
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Where can I install my metal building? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Metal buildings can be installed on a concrete pad, footing, asphalt, gravel, and dirt. All surfaces must be leveled within 3 to 4 inches. If equipped with garage doors, some buildings will require a completely leveled surface to avoid any gaps. We recommend checking with your local building authority and with us prior to pouring any concrete to comply with local guidelines. 
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">How will the metal building be anchored? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Two types of anchoring are available. For structures mounted on a concrete pad or footing, traditional concrete wedge anchors are used. A 30-inch rebar anchor is offered for structures mounted directly on dirt or gravel surfaces. 
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Are lightning strikes a concern for steel buildings? </span>
        <p class="text-gray-700 dark:text-gray-400">
          Lightning is not a significant danger for steel buildings because steel is a good conductor of electricity, directing the energy safely into the ground. This is in contrast to wood-framed buildings, where lightning strikes could potentially start fires. Similarly, if a steel building is exposed to live electrical wires, the energy would be conducted safely to the ground, protecting the interior just like in conventional construction with circuit breakers.
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Will a steel building disrupt radio, TV, or Wi-Fi signals?</span>
        <p class="text-gray-700 dark:text-gray-400">
          No, steel buildings do not interfere with radio, television, or Wi-Fi reception.
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">How long is the warranty on my metal building?</span>
        <p class="text-gray-700 dark:text-gray-400">
          Most of the buildings come with a 20-year rust-through warranty as well as a one-year workmanship warranty. Learn more about our warranty <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="/info-hub#warranty-and-certs">here</a>.
        </p>
      </AccordionItem>
    
      <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
        <span slot="header">Who do I contact to get more information? </span>
        <p class="text-gray-700 dark:text-gray-400">
          We are always excited to speak with potential customers. Please contact us any time using our <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="/contact">online form</a>, phone <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{PHONENUMBER_HREF}">{PHONENUMBER_DISPLAY}</a>, or email <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="mailto:{EMAIL}">{EMAIL}</a>. Follow us on <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="/contact">social media</a>! 
        </p>
      </AccordionItem>
    </Accordion>
  </section>

<section class="my-14">
<h2 class="text-2xl mb-2">Billing</h2>

<Accordion>
  <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
    <span slot="header">I am ready to purchase a metal building. Do I need to make a deposit?</span>
    <p class="text-gray-700 dark:text-gray-400">
      Awesome! Ordering a metal building is now simpler than ever. We require a 16% deposit to process your order and get you on the delivery schedule. Our team of experts will work closely with you to set a date for delivery and installation. Please call us <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="{PHONENUMBER_HREF}">{PHONENUMBER_DISPLAY}</a> or email us at <a class="underline hover:text-ssdblue-950 text-ssdblue-700" href="mailto:{EMAIL}">{EMAIL}</a> for placing your order today. 
    </p>
  </AccordionItem>

  <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
    <span slot="header">Can I upgrade my order after purchase?</span>
    <p class="text-gray-700 dark:text-gray-400">
      Yes, you can upgrade all components from your existing order until we have scheduled a delivery date. You cannot alter an order once delivery has been scheduled
    </p>
  </AccordionItem>
  
  <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
    <span slot="header">When will the remaining balance be collected and by whom?</span>
    <p class="text-gray-700 dark:text-gray-400">
      The building manufacturer will be in charge of collecting the remaining balance of the building once your building has been installed. 
    </p>
  </AccordionItem>
  
  <AccordionItem><div slot="arrowup"><ArrowUp/></div><span slot="arrowdown"><ArrowDown/></span>
    <span slot="header">Is purchasing a steel building more cost-effective compared to traditional construction methods? </span>
    <p class="text-gray-700 dark:text-gray-400">
      Prefabricated metal buildings are indeed one of the most economical choices for new construction. They are tailored and engineered for each project, minimizing wasted materials and significantly reducing unnecessary building costs. Additionally, their quick assembly saves on labor expenses. Furthermore, with standard designs, you'll benefit from long-term savings due to reduced maintenance needs.
    </p>
  </AccordionItem>
</Accordion>
</section>
</div>