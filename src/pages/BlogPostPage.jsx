import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from '@phosphor-icons/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/BlogPostPage.css';

const BlogPostPage = () => {
  const { id } = useParams();
  const postId = parseInt(id);

  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Evolution of Drone Technology: Past, Present, and Future',
      date: 'May 5, 2023',
      author: 'Alex Chen',
      readTime: '8 min read',
      category: 'Technology',
      image: 'evolution',
      content: `
        <p>The history of drone technology is a fascinating journey that spans over a century, evolving from simple remote-controlled aircraft to the sophisticated autonomous systems we see today.</p>

        <h2>The Early Days</h2>
        <p>The concept of unmanned aerial vehicles (UAVs) dates back to the early 20th century, with the development of radio-controlled aircraft for military target practice. During World War I and II, various countries experimented with unmanned aerial torpedoes and reconnaissance vehicles, laying the groundwork for modern drone technology.</p>

        <p>However, these early drones were limited by the technology of their time, with restricted range, payload capacity, and control systems. They were primarily used for military applications and were far from the versatile tools we know today.</p>

        <h2>The Modern Era</h2>
        <p>The real transformation began in the late 20th century with advancements in microprocessors, GPS technology, and lightweight materials. The 1990s saw the introduction of the Predator drone, which revolutionized military reconnaissance and later combat operations.</p>

        <p>By the early 2000s, drone technology began to transition from purely military applications to commercial and consumer use. Companies like DJI, founded in 2006, played a pivotal role in making drone technology accessible to the general public, introducing easy-to-use quadcopters with integrated cameras.</p>

        <h2>Current State of Drone Technology</h2>
        <p>Today's drones are marvels of engineering, featuring advanced flight controllers, obstacle avoidance systems, high-resolution cameras, and impressive battery life. They've found applications across numerous industries:</p>

        <ul>
          <li><strong>Photography and Filmmaking:</strong> Drones have revolutionized aerial photography, allowing filmmakers and photographers to capture stunning perspectives that were once only possible with helicopters or cranes.</li>
          <li><strong>Agriculture:</strong> Precision agriculture uses drones for crop monitoring, soil analysis, and targeted application of fertilizers and pesticides.</li>
          <li><strong>Infrastructure Inspection:</strong> Drones inspect bridges, power lines, and other infrastructure, reducing risk to human inspectors and improving efficiency.</li>
          <li><strong>Search and Rescue:</strong> Equipped with thermal cameras, drones help locate missing persons in challenging terrain.</li>
          <li><strong>Delivery Services:</strong> Companies are developing drone delivery systems for packages, medical supplies, and more.</li>
        </ul>

        <h2>The Future of Drone Technology</h2>
        <p>Looking ahead, several trends are shaping the future of drone technology:</p>

        <h3>Artificial Intelligence and Autonomy</h3>
        <p>AI is enabling drones to operate with greater autonomy, making complex decisions without human intervention. Future drones will likely feature advanced computer vision systems, allowing them to navigate complex environments and perform sophisticated tasks independently.</p>

        <h3>Improved Battery Technology</h3>
        <p>One of the current limitations of drone technology is battery life. Advancements in battery technology, including solid-state batteries and hydrogen fuel cells, promise to extend flight times significantly, opening up new possibilities for long-duration missions.</p>

        <h3>Swarm Technology</h3>
        <p>Drone swarms—multiple drones operating in coordination—represent an exciting frontier. These swarms can perform complex tasks collectively, from light shows to search operations and environmental monitoring.</p>

        <h3>Integration with 5G Networks</h3>
        <p>The rollout of 5G networks will enable drones to communicate with unprecedented speed and reliability, facilitating beyond-visual-line-of-sight (BVLOS) operations and real-time data transmission.</p>

        <h2>Conclusion</h2>
        <p>From their humble beginnings as experimental military tools to their current status as versatile platforms transforming numerous industries, drones have come a long way. As technology continues to advance, we can expect drones to become even more capable, autonomous, and integrated into our daily lives, solving complex problems and opening up new possibilities we've yet to imagine.</p>

        <p>At DX-DRONES, we're proud to be at the forefront of this technological revolution, developing cutting-edge drone systems that push the boundaries of what's possible in aerial technology.</p>
      `
    },
    {
      id: 2,
      title: 'Mastering Aerial Photography: Tips and Techniques',
      date: 'April 18, 2023',
      author: 'Sarah Johnson',
      readTime: '6 min read',
      category: 'Photography',
      image: 'photography',
      content: `
        <p>Aerial photography has been revolutionized by the accessibility of drone technology. What once required helicopters or planes is now possible with a high-quality drone. However, capturing stunning aerial images involves more than simply sending your drone into the sky and pressing the shutter button. Here's a comprehensive guide to mastering aerial photography with your drone.</p>

        <h2>Understanding Your Equipment</h2>
        <p>Before taking to the skies, it's essential to understand your equipment thoroughly:</p>

        <h3>Know Your Drone</h3>
        <p>Familiarize yourself with your drone's capabilities, including its flight time, range, and stability features. Practice flying in different conditions to develop confidence in controlling your aircraft.</p>

        <h3>Camera Settings</h3>
        <p>Most professional drone photographers shoot in RAW format to maximize post-processing flexibility. Understand how to adjust exposure, ISO, shutter speed, and aperture (if your drone camera allows). For most aerial photography, aim for:</p>
        <ul>
          <li>Low ISO (100-400) to minimize noise</li>
          <li>Fast shutter speed (at least 1/500s) to ensure sharpness</li>
          <li>Aperture around f/2.8-f/4 for a good balance of sharpness and light gathering</li>
        </ul>

        <h2>Composition Techniques</h2>
        <p>Aerial photography offers unique perspectives that can transform ordinary scenes into extraordinary images. Here are some composition techniques to consider:</p>

        <h3>The Top-Down Perspective</h3>
        <p>One of the most distinctive drone photography styles is the top-down or "bird's eye" view. This perspective flattens the landscape, revealing patterns and symmetries invisible from the ground. Look for:</p>
        <ul>
          <li>Geometric patterns in urban environments</li>
          <li>Contrasting colors and textures in natural landscapes</li>
          <li>Interesting shadows cast by buildings or natural features</li>
        </ul>

        <h3>Leading Lines</h3>
        <p>Roads, rivers, fences, and shorelines can serve as powerful leading lines in aerial compositions, guiding the viewer's eye through the image. Position these elements diagonally across the frame for dynamic compositions.</p>

        <h3>The Rule of Thirds</h3>
        <p>This classic photography principle applies equally to aerial photography. Divide your frame into thirds both horizontally and vertically, and place key elements along these lines or at their intersections.</p>

        <h2>Lighting Considerations</h2>
        <p>Light dramatically affects the mood and quality of aerial photographs:</p>

        <h3>Golden Hour</h3>
        <p>The hour after sunrise and before sunset provides warm, soft light and long shadows that add depth and dimension to aerial landscapes. This is often the ideal time for drone photography.</p>

        <h3>Midday Light</h3>
        <p>While often avoided in traditional photography, harsh midday light can work well for top-down shots where shadows are less important, or when photographing water bodies where the sun's reflection creates interesting effects.</p>

        <h3>Blue Hour</h3>
        <p>The period just before sunrise or after sunset offers a soft, blue light perfect for urban landscapes where artificial lights are beginning to shine.</p>

        <h2>Advanced Techniques</h2>

        <h3>HDR Photography</h3>
        <p>High Dynamic Range photography involves taking multiple exposures of the same scene and combining them to capture both highlight and shadow detail. Many drones offer automated HDR modes, or you can bracket exposures manually.</p>

        <h3>Panoramas</h3>
        <p>Create expansive aerial panoramas by taking multiple overlapping images and stitching them together in post-processing. Some drones offer automated panorama modes.</p>

        <h3>Long Exposure</h3>
        <p>With a neutral density (ND) filter and a stable hovering drone, you can capture long exposure shots that blur moving elements like water or traffic while keeping stationary elements sharp.</p>

        <h2>Post-Processing Tips</h2>
        <p>Post-processing is often where good aerial photographs become great:</p>

        <ul>
          <li>Adjust contrast and clarity to enhance textures and patterns</li>
          <li>Use graduated filters to balance exposure between bright skies and darker landscapes</li>
          <li>Consider selective color adjustments to emphasize certain elements</li>
          <li>Experiment with aspect ratios—square formats often work well for top-down shots</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Mastering aerial photography is a journey that combines technical skill, artistic vision, and practice. By understanding your equipment, applying composition principles, considering lighting conditions, and refining your images in post-processing, you can create stunning aerial photographs that offer unique perspectives on our world.</p>

        <p>At DX-DRONES, our camera systems are designed to help photographers capture these extraordinary perspectives with exceptional clarity and control. Whether you're a professional photographer or an enthusiastic hobbyist, our drones provide the stability, image quality, and ease of use needed to take your aerial photography to new heights.</p>
      `
    },
    {
      id: 3,
      title: 'Drone Regulations Around the World: What You Need to Know',
      date: 'March 22, 2023',
      author: 'Michael Rodriguez',
      readTime: '10 min read',
      category: 'Regulations',
      image: 'regulations',
      content: `
        <p>As drone technology becomes increasingly accessible and popular worldwide, governments have responded with varying regulatory frameworks to ensure safety, privacy, and security. Understanding these regulations is essential for drone operators, whether flying for recreation or commercial purposes. This guide provides an overview of drone regulations in different regions and offers practical advice for complying with local laws.</p>

        <h2>United States</h2>
        <p>In the United States, drone regulations are primarily governed by the Federal Aviation Administration (FAA):</p>

        <h3>Recreational Pilots</h3>
        <ul>
          <li>Must register drones weighing between 0.55 lbs (250g) and 55 lbs (25kg) with the FAA</li>
          <li>Must fly below 400 feet in uncontrolled airspace</li>
          <li>Must keep the drone within visual line of sight</li>
          <li>Must not fly over people or moving vehicles</li>
          <li>Must not fly near airports or in restricted airspace</li>
          <li>Must pass the TRUST (The Recreational UAS Safety Test)</li>
        </ul>

        <h3>Commercial Pilots</h3>
        <ul>
          <li>Must obtain a Remote Pilot Certificate (Part 107 license)</li>
          <li>Must register their drone with the FAA</li>
          <li>Must operate according to Part 107 rules or obtain waivers for operations outside these rules</li>
          <li>Must maintain records of flights and report accidents</li>
        </ul>

        <h2>European Union</h2>
        <p>The European Union Aviation Safety Agency (EASA) has established harmonized regulations across EU member states, categorizing drone operations based on risk:</p>

        <h3>Open Category (Low Risk)</h3>
        <ul>
          <li>Subdivided into A1, A2, and A3 subcategories based on drone weight and operational conditions</li>
          <li>Requires registration for drones over 250g</li>
          <li>Pilots must complete online training and tests appropriate to their subcategory</li>
          <li>Maximum altitude of 120m (400ft)</li>
          <li>Visual line of sight operations only</li>
        </ul>

        <h3>Specific Category (Medium Risk)</h3>
        <ul>
          <li>Requires operational authorization from national aviation authority</li>
          <li>May use predefined risk assessments (PDRA) or conduct specific risk assessment (SORA)</li>
          <li>Typically involves operations beyond visual line of sight or over populated areas</li>
        </ul>

        <h3>Certified Category (High Risk)</h3>
        <ul>
          <li>Applies to high-risk operations similar to manned aviation</li>
          <li>Requires certification of the drone, the operator, and licensing of the pilot</li>
        </ul>

        <h2>United Kingdom</h2>
        <p>Following Brexit, the UK has maintained regulations similar to the EU framework but with some distinctions:</p>
        <ul>
          <li>Operator registration required for drones over 250g</li>
          <li>Flyer ID required for all remote pilots</li>
          <li>Categories include Open, Specific, and Certified, similar to EU</li>
          <li>Maximum altitude of 120m (400ft)</li>
          <li>Restrictions around airports and sensitive locations</li>
        </ul>

        <h2>Australia</h2>
        <p>The Civil Aviation Safety Authority (CASA) regulates drone operations in Australia:</p>

        <h3>Recreational Pilots</h3>
        <ul>
          <li>No registration or license required for drones under 2kg flown recreationally</li>
          <li>Must fly below 120m (400ft)</li>
          <li>Must keep drone within visual line of sight</li>
          <li>Must not fly within 5.5km of controlled aerodromes</li>
          <li>Must not fly over people or in prohibited areas</li>
        </ul>

        <h3>Commercial Pilots</h3>
        <ul>
          <li>Requires remote pilot license (RePL) and operator certificate (ReOC) for most commercial operations</li>
          <li>Exceptions exist for "excluded" categories, including sub-2kg operations with notification to CASA</li>
        </ul>

        <h2>Canada</h2>
        <p>Transport Canada categorizes drone operations based on weight and operational risk:</p>

        <h3>Basic Operations</h3>
        <ul>
          <li>For drones between 250g and 25kg</li>
          <li>Flown in uncontrolled airspace</li>
          <li>Kept away from people (30m horizontally)</li>
          <li>Requires passing an online exam and obtaining a Pilot Certificate - Basic Operations</li>
        </ul>

        <h3>Advanced Operations</h3>
        <ul>
          <li>For operations in controlled airspace, near people, or over people</li>
          <li>Requires passing an online exam, in-person flight review, and obtaining a Pilot Certificate - Advanced Operations</li>
          <li>Drone must meet safety requirements specified by Transport Canada</li>
        </ul>

        <h2>Japan</h2>
        <p>Japan's drone regulations are administered by the Ministry of Land, Infrastructure, Transport and Tourism:</p>
        <ul>
          <li>Registration required for drones weighing over 100g</li>
          <li>Permission required for flying in densely populated areas, at events, at night, or beyond visual line of sight</li>
          <li>Maximum altitude of 150m (492ft)</li>
          <li>Minimum distance of 30m from people, buildings, and vehicles</li>
        </ul>

        <h2>Practical Tips for International Drone Operators</h2>

        <h3>Before Your Trip</h3>
        <ul>
          <li>Research specific regulations for your destination country</li>
          <li>Check if your drone needs to be registered</li>
          <li>Determine if you need a license or permit to fly</li>
          <li>Consider drone insurance that covers international operation</li>
          <li>Check customs regulations regarding importing drones</li>
        </ul>

        <h3>During Your Trip</h3>
        <ul>
          <li>Use apps like UAV Forecast or B4UFLY to check airspace restrictions</li>
          <li>Carry copies of registrations, permits, and insurance documents</li>
          <li>Respect local privacy laws and cultural sensitivities</li>
          <li>Be aware that some countries have photography restrictions for certain locations</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Navigating drone regulations across different countries can be complex, but understanding and complying with these rules is essential for responsible drone operation. As regulations continue to evolve with the technology, staying informed about current requirements in your flying location is crucial.</p>

        <p>At DX-DRONES, we're committed to promoting safe and legal drone operation. Our drones are designed with features that help pilots comply with regulations, including geofencing capabilities, altitude limitations, and return-to-home functions. We encourage all drone operators to fly responsibly and respect local laws, ensuring that drone technology can continue to benefit society while minimizing risks.</p>
      `
    },
    {
      id: 4,
      title: 'The Future of Delivery Drones: Revolutionizing Logistics',
      date: 'February 10, 2023',
      author: 'Emily Wilson',
      readTime: '7 min read',
      category: 'Innovation',
      image: 'delivery',
      content: `
        <p>The concept of drone delivery has rapidly evolved from science fiction to reality in recent years. Major companies and startups alike are investing heavily in developing autonomous aerial delivery systems that promise to transform how goods are transported. This article explores the current state of delivery drone technology, its potential applications, challenges, and what the future holds for this revolutionary approach to logistics.</p>

        <h2>The Current State of Delivery Drones</h2>
        <p>Several companies have made significant progress in developing and testing delivery drone systems:</p>

        <h3>Commercial Implementations</h3>
        <ul>
          <li><strong>Amazon Prime Air:</strong> After years of development, Amazon has begun limited drone delivery trials, with drones capable of delivering packages up to 5 pounds within a 15-mile radius in under 30 minutes.</li>
          <li><strong>Wing (Alphabet):</strong> Google's parent company has launched commercial drone delivery services in parts of Australia, Finland, and the United States, focusing on delivering small packages, food, and pharmaceuticals.</li>
          <li><strong>UPS Flight Forward:</strong> Received the first full Part 135 Standard certification from the FAA, allowing them to operate a drone delivery network across the United States.</li>
          <li><strong>Zipline:</strong> Specializes in delivering medical supplies in challenging environments, particularly in Rwanda and Ghana, where they've completed over 200,000 commercial deliveries.</li>
        </ul>

        <h3>Technical Capabilities</h3>
        <p>Modern delivery drones typically feature:</p>
        <ul>
          <li>Autonomous navigation systems with obstacle avoidance</li>
          <li>Payload capacities ranging from 2-15 pounds</li>
          <li>Flight ranges of 10-20 miles</li>
          <li>Vertical take-off and landing capabilities</li>
          <li>Advanced weather resistance</li>
          <li>Precision delivery mechanisms</li>
        </ul>

        <h2>Transformative Applications</h2>
        <p>Delivery drones are poised to revolutionize various sectors:</p>

        <h3>Last-Mile Delivery</h3>
        <p>Perhaps the most obvious application is last-mile delivery for e-commerce and food delivery services. Drones can potentially deliver packages faster and more efficiently than traditional methods, especially in congested urban areas or remote locations with poor road infrastructure.</p>

        <h3>Medical and Pharmaceutical Deliveries</h3>
        <p>One of the most impactful applications is in healthcare logistics:</p>
        <ul>
          <li>Delivering emergency medical supplies like blood, vaccines, and medications to remote or disaster-stricken areas</li>
          <li>Transporting lab samples between medical facilities</li>
          <li>Delivering prescription medications directly to patients with mobility challenges</li>
        </ul>

        <h3>Humanitarian Aid</h3>
        <p>Drones can deliver essential supplies to areas cut off by natural disasters or in conflict zones where ground transportation is dangerous or impossible.</p>

        <h3>Industrial and Agricultural Applications</h3>
        <p>Beyond consumer deliveries, drones are being used to:</p>
        <ul>
          <li>Transport parts and tools to remote industrial sites</li>
          <li>Deliver agricultural supplies to farmers in the field</li>
          <li>Support maintenance operations for infrastructure in difficult-to-reach locations</li>
        </ul>

        <h2>Challenges and Limitations</h2>
        <p>Despite rapid progress, several challenges must be addressed before widespread adoption becomes reality:</p>

        <h3>Regulatory Hurdles</h3>
        <p>Aviation authorities worldwide are still developing comprehensive frameworks for commercial drone operations, particularly for beyond visual line of sight (BVLOS) flights essential for delivery services.</p>

        <h3>Technical Limitations</h3>
        <ul>
          <li><strong>Battery Life:</strong> Current battery technology limits flight time and range</li>
          <li><strong>Payload Capacity:</strong> Most delivery drones can only carry relatively small, lightweight packages</li>
          <li><strong>Weather Sensitivity:</strong> High winds, rain, and snow can ground delivery drones</li>
        </ul>

        <h3>Infrastructure Requirements</h3>
        <p>Widespread drone delivery would require new infrastructure, including:</p>
        <ul>
          <li>Drone ports for takeoff, landing, and charging</li>
          <li>Air traffic management systems for drone corridors</li>
          <li>Secure delivery points at homes and businesses</li>
        </ul>

        <h3>Public Acceptance</h3>
        <p>Concerns about privacy, noise pollution, and visual disruption must be addressed to gain public acceptance of delivery drones operating in residential areas.</p>

        <h2>The Future of Delivery Drones</h2>
        <p>Looking ahead, several trends are likely to shape the evolution of drone delivery:</p>

        <h3>Technological Advancements</h3>
        <ul>
          <li><strong>Improved Battery Technology:</strong> Solid-state batteries and hydrogen fuel cells promise to extend flight times and ranges significantly</li>
          <li><strong>Advanced AI:</strong> More sophisticated autonomous navigation and decision-making capabilities</li>
          <li><strong>Quieter Propulsion:</strong> Noise reduction technologies to make drones more acceptable in urban environments</li>
          <li><strong>Increased Payload Capacity:</strong> Larger drones capable of carrying heavier packages</li>
        </ul>

        <h3>Integration with Other Systems</h3>
        <p>Future delivery networks will likely combine drones with other transportation methods:</p>
        <ul>
          <li>Drone-equipped delivery vans that serve as mobile launch platforms</li>
          <li>Integration with autonomous ground vehicles for comprehensive delivery solutions</li>
          <li>Smart city infrastructure that supports and communicates with delivery drones</li>
        </ul>

        <h3>Specialized Applications</h3>
        <p>Rather than a one-size-fits-all approach, we'll likely see specialized drone delivery systems optimized for specific use cases:</p>
        <ul>
          <li>High-speed medical delivery drones</li>
          <li>Heavy-lift drones for larger packages</li>
          <li>Indoor delivery drones for warehouses and large facilities</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Delivery drones represent one of the most significant innovations in logistics since the introduction of containerized shipping. While challenges remain, the potential benefits in terms of speed, efficiency, and access to remote areas are driving rapid development and investment in this technology.</p>

        <p>As regulatory frameworks mature and technology advances, we can expect to see drone delivery become increasingly common, first in specialized applications like medical deliveries and gradually expanding to more general consumer deliveries.</p>

        <p>At DX-DRONES, we're excited to be part of this revolution, developing drone platforms that combine the reliability, efficiency, and safety needed for the next generation of aerial logistics. Our research and development teams are working on solutions that address current limitations while pushing the boundaries of what's possible in autonomous aerial delivery.</p>
      `
    }
  ];

  const post = blogPosts.find(post => post.id === postId);

  if (!post) {
    return (
      <div className="blog-post-page">
        <Navbar />
        <div className="container">
          <div className="post-not-found">
            <h2>Post not found</h2>
            <Link to="/blog" className="button">Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Navbar />

      <main className="blog-post-content">
        <article className="blog-post">
          <div className="post-hero">
            <div className="container">
              <Link to="/blog" className="back-link">
                <ArrowLeft size={20} weight="light" />
                <span>Back to Blog</span>
              </Link>

              <motion.div
                className="post-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {post.category}
              </motion.div>

              <motion.h1
                className="post-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {post.title}
              </motion.h1>

              <motion.div
                className="post-meta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="meta-item">
                  <Calendar size={18} weight="light" />
                  <span>{post.date}</span>
                </div>
                <div className="meta-item">
                  <User size={18} weight="light" />
                  <span>{post.author}</span>
                </div>
                <div className="meta-item">
                  <Clock size={18} weight="light" />
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="post-featured-image">
            <div className="container">
              <motion.div
                className="image-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="placeholder-image">
                  <span>{post.image} Image</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="post-body">
            <div className="container">
              <motion.div
                className="post-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
