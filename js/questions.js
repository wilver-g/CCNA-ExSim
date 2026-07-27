/* ======================================
   CCNA Practice Exam Simulator
   js/questions.js
   Question Bank & Domain Metadata
====================================== */

// The complete 102-question source bank. app.js selects a fresh 60-question exam at startup.
let questions = [
  // --- Domain 1: Network Fundamentals ---
  {
    id: 101,
    domain: "Network Fundamentals",
    type: "single",
    question: "Which TCP/IP transport layer protocol provides reliable, connection-oriented data delivery?",
    snippet: null,
    options: [
      "UDP",
      "TCP",
      "ICMP",
      "IP"
    ],
    answer: [1],
    explanation: "TCP (Transmission Control Protocol) is connection-oriented and uses sequence numbers and acknowledgments to ensure reliable delivery. UDP is connectionless and unacknowledged."
  },
  {
    id: 102,
    domain: "Network Fundamentals",
    type: "single",
    question: "What is the standard subnet mask for a /27 IPv4 network?",
    snippet: null,
    options: [
      "255.255.255.192",
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.248"
    ],
    answer: [1],
    explanation: "A /27 prefix leaves 5 host bits. In the 4th octet, 128 + 64 + 32 = 224. Therefore, the mask is 255.255.255.224."
  },

  // --- Domain 2: Network Access ---
  {
    id: 201,
    domain: "Network Access",
    type: "single",
    question: "An administrator needs to configure a trunk port on a switch supporting standard IEEE 802.1Q. Which command enables dot1q encapsulation on supported Catalyst switches?",
    snippet: "Switch(config-if)# switchport trunk encapsulation dot1q\nSwitch(config-if)# switchport mode trunk",
    options: [
      "switchport mode trunk encapsulation dot1q",
      "switchport trunk encapsulation dot1q",
      "switchport mode dot1q",
      "encapsulation dot1q vlan-id"
    ],
    answer: [1],
    explanation: "On switches supporting multiple trunking protocols (ISL and 802.1Q), 'switchport trunk encapsulation dot1q' must be issued before enabling trunk mode."
  },
  {
    id: 202,
    domain: "Network Access",
    type: "multiple",
    question: "Which two statements correctly describe Spanning Tree Protocol (STP) port states? (Choose two.)",
    snippet: null,
    options: [
      "In the Learning state, the port processes BPDUs and populates the MAC address table.",
      "In the Blocking state, the port forwards user data packets.",
      "In the Listening state, the port populates the MAC address table with source addresses.",
      "In the Forwarding state, the port sends and receives user data packets.",
      "In the Disabled state, the port actively participates in BPDU election."
    ],
    answer: [0, 3],
    explanation: "During 'Learning', ports process BPDUs and build MAC tables without forwarding data. During 'Forwarding', ports transmit and receive data packets normally."
  },

  // --- Domain 3: IP Connectivity ---
  {
    id: 301,
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the output below. Which route will R1 use to forward traffic destined to 10.1.1.50?",
    snippet: "Codes: C - connected, S - static, R - RIP, O - OSPF\n\nS    10.1.0.0/16 [1/0] via 192.168.1.1\nO    10.1.1.0/24 [110/2] via 192.168.1.2\nR    10.1.1.32/27 [120/2] via 192.168.1.3\nO    10.1.1.48/28 [110/3] via 192.168.1.4",
    options: [
      "The Static route via 192.168.1.1 because it has the lowest Administrative Distance.",
      "The OSPF route via 192.168.1.2 because OSPF has a metric of 2.",
      "The OSPF route via 192.168.1.4 due to the longest prefix match rule (/28).",
      "The RIP route via 192.168.1.3."
    ],
    answer: [2],
    explanation: "Routers always prefer the longest prefix match (most specific subnet mask) first regardless of Administrative Distance. 10.1.1.48/28 matches 10.1.1.50 with a 28-bit mask length, making it the most specific route."
  },
  {
    id: 302,
    domain: "IP Connectivity",
    type: "single",
    question: "What is the default administrative distance of OSPF?",
    snippet: null,
    options: [
      "90",
      "100",
      "110",
      "120"
    ],
    answer: [2],
    explanation: "OSPF has a default Administrative Distance of 110 (EIGRP internal is 90, EIGRP external is 170, and RIP is 120)."
  },

  // --- Domain 4: IP Services ---
  {
    id: 401,
    domain: "IP Services",
    type: "single",
    question: "Which dynamic NAT configuration element maps private internal IP addresses to a public pool using port numbers (PAT)?",
    snippet: null,
    options: [
      "ip nat inside source list 1 pool PUBLIC_POOL overload",
      "ip nat inside source static 192.168.1.10 203.0.113.10",
      "ip nat outside source list 1 pool PUBLIC_POOL",
      "ip nat pool PUBLIC_POOL 203.0.113.1 203.0.113.10 netmask 255.255.255.0"
    ],
    answer: [0],
    explanation: "Adding the 'overload' keyword to the 'ip nat inside source list' command enables Port Address Translation (PAT)."
  },

  // --- Domain 5: Security Fundamentals ---
  {
    id: 501,
    domain: "Security Fundamentals",
    type: "single",
    question: "An engineer wants to secure management access to a router CLI using SSH instead of Telnet. Which TCP port must be permitted on inbound firewalls?",
    snippet: null,
    options: [
      "TCP Port 20",
      "TCP Port 22",
      "TCP Port 23",
      "TCP Port 80"
    ],
    answer: [1],
    explanation: "SSH operates over TCP port 22, whereas Telnet operates over TCP port 23."
  },
  {
    id: 502,
    domain: "Security Fundamentals",
    type: "multiple",
    question: "Which two security features mitigate Layer 2 attacks on Cisco switch ports? (Choose two.)",
    snippet: null,
    options: [
      "DHCP Snooping",
      "Dynamic ARP Inspection (DAI)",
      "OSPF MD5 Authentication",
      "IPsec Tunneling",
      "BGP AS-Path Filtering"
    ],
    answer: [0, 1],
    explanation: "DHCP Snooping prevents rogue DHCP servers, and DAI protects against ARP poisoning. Both are essential Layer 2 switch security features."
  },

  // --- Domain 6: Automation & Programmability ---
  {
    id: 601,
    domain: "Automation & Programmability",
    type: "single",
    question: "Which data-serialization format uses curly braces `{}` to denote objects and square brackets `[]` to denote arrays?",
    snippet: null,
    options: [
      "XML",
      "YAML",
      "JSON",
      "HTML"
    ],
    answer: [2],
    explanation: "JSON (JavaScript Object Notation) uses `{}` for objects and `[]` for arrays. YAML uses indentation/dashes, and XML uses tags."
  },

  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Which TCP/IP model layer is responsible for logical addressing and packet routing across different networks?",
    options: ["Network Access Layer", "Internet Layer", "Transport Layer", "Application Layer"],
    correct: 1,
    explanation: "The Internet layer of the TCP/IP model corresponds to Layer 3 (Network) of the OSI model and handles IP addressing, packet encapsulation, and routing."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "What is the primary difference between TCP and UDP?",
    options: [
      "TCP is connectionless and unacknowledged; UDP is connection-oriented.",
      "TCP provides reliable, sequenced data transfer; UDP provides low-overhead, unacknowledged transfer.",
      "TCP operates at Layer 3; UDP operates at Layer 4.",
      "TCP uses IP headers only; UDP requires MAC addresses."
    ],
    correct: 1,
    explanation: "TCP establishes connections, tracks sequence numbers, and requires acknowledgments. UDP is lightweight and connectionless, prioritizing speed over reliability."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Which type of IPv6 address is equivalent to the IPv4 private IP address range (RFC 1918) and begins with fd00::/8?",
    options: ["Global Unicast", "Link-Local", "Unique Local", "Multicast"],
    correct: 2,
    explanation: "Unique Local Addresses (FC00::/7, commonly FD00::/8) are non-routable on the public internet, making them the IPv6 equivalent of IPv4 private addresses."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "An administrator needs to assign an IPv6 address automatically without using a stateful DHCPv6 server. Which mechanism uses ICMPv6 Router Advertisements and EUI-64 or random bits?",
    options: ["SLAAC", "DHCPv6 Relay", "Static ARP", "DNS Dynamic Update"],
    correct: 0,
    explanation: "Stateless Address Autoconfiguration (SLAAC) allows hosts to generate their own IPv6 unicast addresses using ICMPv6 RA messages received from local routers."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Which IPv6 address type is automatically configured on an IPv6-enabled interface and always starts with fe80::/10?",
    options: ["Global Unicast", "Anycast", "Link-Local", "Loopback"],
    correct: 2,
    explanation: "Link-Local addresses (FE80::/10) are automatically created on IPv6-enabled interfaces for communication strictly within the local layer 2 segment."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "How many host IP addresses are available in a /29 subnet?",
    options: ["2", "6", "14", "30"],
    correct: 1,
    explanation: "A /29 subnet provides 32 - 29 = 3 host bits ($2^3 = 8$). Subtracting 2 for network and broadcast leaves 6 usable host addresses."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Which speed and duplex setting requires explicit manual configuration on a Cisco switch port when auto-negotiation fails or is disabled?",
    options: ["Full duplex / Auto speed", "Half duplex / 1000 Mbps", "Duplex and speed on both connecting ends", "Gigabit speed with CSMA/CD"],
    correct: 2,
    explanation: "If auto-negotiation is disabled on one end, both duplex and speed should be explicitly configured on both sides to avoid duplex mismatch errors."
  },
  {
    domain: "Network Fundamentals",
    type: "multiple",
    question: "Which two statements correctly describe the characteristics of fiber-optic cabling compared to copper cabling?",
    options: [
      "Fiber optic is susceptible to Electromagnetic Interference (EMI).",
      "Fiber optic supports significantly longer distance transmissions.",
      "Single-mode fiber uses LEDs as light sources.",
      "Fiber optic is immune to EMI and RF interference.",
      "Multimode fiber uses laser diodes for long-haul WAN links."
    ],
    correct: [1, 3],
    explanation: "Fiber cabling uses pulses of light, making it completely immune to EMI/RFI and capable of spanning much longer distances than copper."
  },

  // --- NETWORK ACCESS ---
  {
    domain: "Network Access",
    type: "single",
    question: "Which command assigns a switchport to VLAN 20 as an access port?",
    snippet: "Switch(config-if)# ...",
    options: [
      "switchport mode trunk vlan 20",
      "switchport access vlan 20",
      "vlan 20 access-enable",
      "switchport trunk allowed vlan 20"
    ],
    correct: 1,
    explanation: "'switchport access vlan 20' assigns the interface to VLAN 20 when operating in access mode."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "Which 802.1Q encapsulation concept refers to traffic transmitted over a trunk port without a VLAN tag?",
    options: ["Management VLAN", "Native VLAN", "Reserved VLAN", "Default VLAN"],
    correct: 1,
    explanation: "By default, frame traffic on the Native VLAN travels untagged across an 802.1Q trunk."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "What is the primary role of Spanning Tree Protocol (STP)?",
    options: [
      "To route packets between different VLANs",
      "To prevent Layer 2 bridging loops in redundant switch topologies",
      "To dynamically assign IP addresses to switch clients",
      "To encrypt switch management traffic"
    ],
    correct: 1,
    explanation: "STP blocks redundant paths to prevent broadcast storms and Layer 2 loops in switched networks."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "In Rapid PVST+ (802.1w), which port role replaces the legacy STP Listening and Blocking states?",
    options: ["Discarding", "Learning", "Forwarding", "Disabled"],
    correct: 0,
    explanation: "802.1w combines the Disabled, Blocking, and Listening states into a single 'Discarding' state."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "An engineer wants to group GigabitEthernet0/1 and GigabitEthernet0/2 into a LACP EtherChannel. Which channel-group mode must be used?",
    options: ["on", "desirable", "active", "auto"],
    correct: 2,
    explanation: "'active' initiates LACP negotiation. ('desirable' and 'auto' belong to Cisco PAgP, and 'on' forces static trunking without protocol negotiation)."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "Which feature allows immediate transition of an access switch port from blocking to forwarding state, bypassing listening and learning?",
    options: ["BPDU Guard", "PortFast", "Root Guard", "Loop Guard"],
    correct: 1,
    explanation: "PortFast transitions an end-station access port directly to the STP Forwarding state immediately upon connection."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "What happens when a switch port configured with BPDU Guard receives a Spanning Tree BPDU?",
    options: [
      "The BPDU is silently dropped.",
      "The port is immediately put into err-disabled state.",
      "The port becomes the STP Root Port.",
      "The port switches automatically to trunking mode."
    ],
    correct: 1,
    explanation: "BPDU Guard protects against unexpected switches being plugged into access ports by putting the interface into an 'err-disabled' state if a BPDU is received."
  },
  {
    domain: "Network Access",
    type: "multiple",
    question: "Which two Wireless LAN security protocols utilize AES encryption?",
    options: ["WEP", "WPA (TKIP)", "WPA2 (CCMP)", "WPA3 (GCMP)", "Open Authentication"],
    correct: [2, 3],
    explanation: "WPA2 uses AES with CCMP, while WPA3 uses upgraded AES with GCMP. WEP and original WPA use RC4."
  },

  // --- IP CONNECTIVITY ---
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which metric does OSPF use by default to determine the best path to a destination?",
    options: ["Hop Count", "Bandwidth (Cost)", "Delay", "Load and Reliability"],
    correct: 1,
    explanation: "OSPF uses Cost, which is derived from interface bandwidth ($Cost = Reference\ Bandwidth / Interface\ Bandwidth$)."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "What administrative distance does a Cisco router assign to a statically configured route by default?",
    options: ["0", "1", "90", "110"],
    correct: 1,
    explanation: "Static routes have a default Administrative Distance of 1. Directly connected routes are 0, EIGRP is 90, and OSPF is 110."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which static route command configures a floating static backup route for network 10.0.0.0/8 via 192.168.1.1 when the primary route has an AD of 110?",
    options: [
      "ip route 10.0.0.0 255.0.0.0 192.168.1.1 1",
      "ip route 10.0.0.0 255.0.0.0 192.168.1.1 120",
      "ip route 192.168.1.1 255.0.0.0 10.0.0.0 110",
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1 90"
    ],
    correct: 1,
    explanation: "A floating static route must have an Administrative Distance higher than the primary route (e.g., 120 is higher than OSPF's 110) so it remains inactive until the primary route drops."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "What is the multicast address used by OSPFv2 routers to send Hello packets to All OSPF Routers?",
    options: ["224.0.0.1", "224.0.0.5", "224.0.0.6", "224.0.0.10"],
    correct: 1,
    explanation: "OSPFv2 uses 224.0.0.5 for AllDRouters (all OSPF routers) and 224.0.0.6 for AllDRRouters (Designated Routers)."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which condition must match between two neighboring routers for an OSPFv2 adjacency to form?",
    options: [
      "Process ID",
      "Hello and Dead interval timers",
      "Router ID",
      "Loopback address range"
    ],
    correct: 1,
    explanation: "OSPF neighbors must agree on Area ID, Subnet/Mask, Hello/Dead timers, and Authentication passwords to form full adjacency."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which command displays the current contents of the IPv4 routing table on a Cisco IOS router?",
    options: ["show ip route", "show ip ospf neighbor", "show ip interface brief", "show ip protocols"],
    correct: 0,
    explanation: "'show ip route' lists all active routes, protocol codes, administrative distances, and next-hop addresses."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "In an IPv6 routing table, what does the code 'L' signify?",
    options: ["Link-Local Static Route", "Local Interface Address (/128 host route)", "Loopback interface route", "LISP route"],
    correct: 1,
    explanation: "'L' indicates a Local route entry representing the exact IPv6 address (/128) assigned to an interface."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "What destination IP address is used in a default static route?",
    options: ["127.0.0.1 255.255.255.255", "0.0.0.0 0.0.0.0", "255.255.255.255 0.0.0.0", "192.168.0.0 255.255.0.0"],
    correct: 1,
    explanation: "0.0.0.0 0.0.0.0 represents 'any network / any mask' in IPv4 static default routing syntax."
  },

  // --- IP SERVICES ---
  {
    domain: "IP Services",
    type: "single",
    question: "Which standard service forwards DHCP broadcast requests from clients across a router to a remote DHCP server on a different subnet?",
    options: ["DNS Forwarder", "DHCP Option 82", "IP Helper Address", "NAT Overload"],
    correct: 2,
    explanation: "The 'ip helper-address <server_ip>' interface command converts DHCP UDP broadcasts into unicast requests sent directly to the DHCP server."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "What type of NAT translates multiple internal private IP addresses into a single public IP address using unique source port numbers?",
    options: ["Static NAT", "Dynamic NAT without overload", "PAT / NAT Overload", "Destination NAT"],
    correct: 2,
    explanation: "Port Address Translation (PAT), also known as NAT Overload, maps multiple private IPs to a single public IP by tracking TCP/UDP port numbers."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Which protocol synchronizes switch and router clocks across a network?",
    options: ["SNMP", "NTP", "Syslog", "FTP"],
    correct: 1,
    explanation: "Network Time Protocol (NTP) ensures device clocks are consistent across the network enterprise."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "In First Hop Redundancy Protocols (FHRP), which virtual IP address concept is provided by HSRP?",
    options: [
      "A single virtual gateway IP shared between primary and standby routers",
      "Dynamic assignment of DNS domain names to clients",
      "A virtual MAC address mapping directly to physical WAN IPs",
      "Round-robin load balancing without IP sharing"
    ],
    correct: 0,
    explanation: "HSRP provides default gateway redundancy by grouping active and standby routers under a single Virtual IP and MAC address."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Which Syslog severity level represents critical conditions, such as immediate system component failure?",
    options: ["Level 0 (Emergency)", "Level 2 (Critical)", "Level 4 (Warning)", "Level 7 (Debugging)"],
    correct: 1,
    explanation: "Syslog severity levels range from 0 (Emergency) to 7 (Debugging). Level 2 stands for Critical."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Which protocol allows network management stations to monitor performance and poll switch status using OIDs?",
    options: ["SMTP", "SNMP", "SSH", "TFTP"],
    correct: 1,
    explanation: "Simple Network Management Protocol (SNMP) uses Object Identifiers (OIDs) within MIBs to query device stats and receive SNMP traps."
  },

  // --- SECURITY FUNDAMENTALS ---
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Where should an Extended Access Control List (ACL) ideally be placed for optimal network efficiency?",
    options: [
      "As close to the destination as possible",
      "As close to the traffic source as possible",
      "On the core switch trunk link",
      "On the Internet edge gateway router"
    ],
    correct: 1,
    explanation: "Extended ACLs filter based on source, destination, and ports, so placing them closest to the source prevents unwanted traffic from traversing the network core."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which parameter is evaluated first when an IP packet matches a numbered standard ACL?",
    options: [
      "Destination IP address",
      "Top-to-bottom order of statements",
      "Implicit permit at the end",
      "TCP source port number"
    ],
    correct: 1,
    explanation: "ACL entries are processed sequentially from top to bottom. The first matching rule applies, and processing stops immediately."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "What is the implied default rule present at the end of every Cisco IOS Access Control List?",
    options: ["permit ip any any", "deny ip any any", "permit host 127.0.0.1", "log all"],
    correct: 1,
    explanation: "All Cisco ACLs end with an unwritten 'implicit deny all' statement (`deny ip any any`)."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which Port Security violation mode drops unauthorized packets AND increments the security violation counter while keeping the port up?",
    options: ["Protect", "Restrict", "Shutdown", "Disable"],
    correct: 1,
    explanation: "'Restrict' drops unauthorized traffic, logs a Syslog message, and increments the violation counter. 'Protect' drops traffic silently without incrementing the counter."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which security threat is mitigated by enabling DHCP Snooping on untrusted access ports?",
    options: ["Rogue DHCP Server attacks", "MAC flood attacks", "STP loop attacks", "Ping sweeps"],
    correct: 0,
    explanation: "DHCP Snooping blocks unauthorized (rogue) DHCP servers from responding to client DHCP discovery requests on untrusted ports."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which security protocol encrypts administrative terminal management sessions to a router, replacing unencrypted Telnet?",
    options: ["HTTP", "SNMPv1", "SSH", "FTP"],
    correct: 2,
    explanation: "Secure Shell (SSH, port 22) encrypts command-line management traffic, protecting credentials from eavesdropping."
  },
  {
    domain: "Security Fundamentals",
    type: "multiple",
    question: "Which two components are primary elements of AAA network access security?",
    options: ["Authorization", "Accounting", "Amplification", "Association", "Attenuation"],
    correct: [0, 1],
    explanation: "AAA stands for Authentication (who you are), Authorization (what you can do), and Accounting (tracking what you did)."
  },

  // --- AUTOMATION & PROGRAMMABILITY ---
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Which architecture separates the network control plane from the data plane, centralizing intelligence into a software controller?",
    options: ["Traditional Routing", "SDN (Software-Defined Networking)", "Autonomous Access Points", "Full Mesh IPsec"],
    correct: 1,
    explanation: "SDN decouples the control plane (routing/forwarding decisions) from the underlying physical data plane hardware."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Which REST API HTTP method is typically used to update an existing configuration resource on a Cisco DNA Center or Webex server?",
    options: ["GET", "PUT", "POST", "DELETE"],
    correct: 1,
    explanation: "In RESTful APIs: GET retrieves data, POST creates a new resource, PUT updates/replaces an existing resource, and DELETE removes it."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Which configuration management tool uses Playbooks written in human-readable YAML and operates agentlessly over SSH?",
    options: ["Puppet", "Chef", "Ansible", "Terraform"],
    correct: 2,
    explanation: "Ansible is agentless, uses SSH for transport, and relies on declarative YAML files called Playbooks."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "In Cisco DNA Center / Catalyst Center, which plane manages device discovery, software updates, and provisioning templates?",
    options: ["Data Plane", "Management Plane", "Control Plane", "Forwarding Plane"],
    correct: 1,
    explanation: "The Management plane provides administrative controls, GUI/API interfaces, and provisioning tasks across infrastructure elements."
  }
  
];

const dragDropQuestions = [
  {
    domain: "Network Fundamentals",
    type: "dragdrop",
    question: "Match each TCP/IP layer with its corresponding protocol or service.",
    draggables: ["HTTP / DNS", "TCP / UDP", "IP / ICMP", "Ethernet / Wi-Fi"],
    dropzones: ["Application Layer", "Transport Layer", "Internet Layer", "Network Access Layer"],
    // Index mapping: draggables[0] belongs in dropzones[0], draggables[1] in dropzones[1], etc.
    correct: [0, 1, 2, 3],
    explanation: "HTTP/DNS operate at Application; TCP/UDP at Transport; IP/ICMP at Internet; and Ethernet/Wi-Fi at Network Access."
  },
  {
    domain: "IP Connectivity",
    type: "dragdrop",
    question: "Match each routing protocol parameter/metric with its correct default value.",
    draggables: ["110", "90", "1", "Cost (Bandwidth)"],
    dropzones: ["OSPF Administrative Distance", "EIGRP Internal AD", "Static Route AD", "OSPF Metric"],
    correct: [0, 1, 2, 3],
    explanation: "OSPF AD is 110, EIGRP AD is 90, Static Route default AD is 1, and OSPF metric is Cost."
  },
  {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "Which of the following IPv6 address types is routable only on a single local link and is never routed across public routers?",
        options: [
            "Global Unicast",
            "Unique Local",
            "Link-Local",
            "Anycast"
        ],
        correct: 2,
        explanation: "Link-local addresses (starting with fe80::/10) are used for communication on a single local link and are automatically generated by interfaces. Routers never forward packets with link-local source or destination addresses."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "What is the default administrative distance of an OSPF route?",
        options: [
            "90",
            "100",
            "110",
            "120"
        ],
        correct: 2,
        explanation: "OSPF has a default administrative distance (AD) of 110. EIGRP is 90, RIP is 120, and static routes have an AD of 1."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which protocol is used to dynamically resolve MAC addresses to IPv4 addresses on a local network?",
        options: [
            "ARP",
            "RARP",
            "ICMP",
            "DHCP"
        ],
        correct: 1,
        explanation: "Reverse ARP (RARP) was historically used by diskless workstations to discover their own IPv4 address by providing their MAC address. ARP resolves IPv4 addresses to MAC addresses."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "Which mechanism prevents routing loops by ensuring that a router does not advertise a route back out the same interface it learned it from?",
        options: [
            "Poison Reverse",
            "Split Horizon",
            "Route Poisoning",
            "Holddown Timer"
        ],
        correct: 1,
        explanation: "Split Horizon is a loop-prevention mechanism that dictates that a router should never send information about a route back in the direction from which it was originally learned."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which UDP port is used by default for Syslog messages?",
        options: [
            "Port 22",
            "Port 69",
            "Port 514",
            "Port 161"
        ],
        correct: 2,
        explanation: "Syslog utilizes UDP port 514 by default for sending system log messages to a collector or server."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "Which port security violation mode causes the switch port to drop frames from unauthorized sources, log the violation, and send an SNMP trap without shutting down the interface?",
        options: [
            "Shutdown",
            "Restrict",
            "Protect",
            "Block"
        ],
        correct: 1,
        explanation: "The restrict mode drops unauthorized traffic, increments violation counters, logs the event, and sends an SNMP trap. The protect mode drops traffic silently without notification."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "Which data serialization format uses indentation and whitespace to define data structures and is commonly used in configuration files and Ansible playbooks?",
        options: [
            "JSON",
            "XML",
            "YAML",
            "CSV"
        ],
        correct: 2,
        explanation: "YAML (YAML Ain't Markup Language) relies heavily on indentation and whitespace to represent hierarchical data structures."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "What is the primary function of the OSI Transport layer?",
        options: [
            "Logical addressing and routing",
            "Reliable or unreliable end-to-end data delivery and flow control",
            "Data encryption and compression",
            "Physical transmission of bits over media"
        ],
        correct: 1,
        explanation: "The Transport layer (Layer 4) is responsible for reliable or best-effort end-to-end data delivery, flow control, and multiplexing using protocols like TCP and UDP."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "When configuring an EtherChannel using LACP, which mode combination will successfully form the channel?",
        options: [
            "Active and Active",
            "Desirable and Auto",
            "Desirable and Desirable",
            "Auto and Auto"
        ],
        correct: 0,
        explanation: "LACP is standards-based (802.3ad). To form an active channel, at least one end must be in 'active' mode, while the other can be 'active' or 'passive'. Two passive ends will not form a channel."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "Which command is used to verify the OSPF neighbor states and ensure a full adjacency has formed on a Cisco router?",
        options: [
            "show ip route ospf",
            "show ip ospf interface",
            "show ip ospf neighbor",
            "show ip protocols"
        ],
        correct: 2,
        explanation: "The 'show ip ospf neighbor' command displays a list of all OSPF neighbor routers, their current state (e.g., FULL), and interface associations."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which protocol allows network devices to share time synchronization with a reference clock source?",
        options: [
            "SNMP",
            "NTP",
            "DHCP",
            "FTP"
        ],
        correct: 1,
        explanation: "Network Time Protocol (NTP) synchronizes the clocks of computer and network systems over packet-switched, variable-latency data networks."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "Which type of attack involves an attacker injecting malicious JavaScript into a trusted website viewed by other users?",
        options: [
            "Denial of Service (DoS)",
            "Cross-Site Scripting (XSS)",
            "Man-in-the-Middle (MitM)",
            "SQL Injection"
        ],
        correct: 1,
        explanation: "Cross-Site Scripting (XSS) lets attackers inject client-side scripts into web pages viewed by other users, bypassing access controls."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "Which JSON data type is enclosed in square brackets `[]` and represents an ordered collection of values?",
        options: [
            "Object",
            "String",
            "Array",
            "Boolean"
        ],
        correct: 2,
        explanation: "In JSON, an array is an ordered list of values enclosed in square brackets `[]`, whereas an object is an unordered set of name/value pairs enclosed in curly braces `{}`."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "How many usable host IP addresses are available on a subnet with a prefix length of /27?",
        options: [
            "14",
            "30",
            "62",
            "126"
        ],
        correct: 1,
        explanation: "A /27 subnet leaves 32 - 27 = 5 host bits. The formula for usable hosts is $2^h - 2$, which gives $2^5 - 2 = 32 - 2 = 30$ usable hosts."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which spanning-tree enhancement immediately transitions an access port to the forwarding state when connected to an end device, bypassing listening and learning states?",
        options: [
            "BPDU Guard",
            "PortFast",
            "Root Guard",
            "Loop Guard"
        ],
        correct: 1,
        explanation: "PortFast causes a switch or trunk port to transition straight from blocking to forwarding upon link up, bypassing listening and learning stages, specifically for edge ports."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "Which static route configuration creates a valid floating static route with an administrative distance of 250?",
        options: [
            "ip route 0.0.0.0 0.0.0.0 192.168.1.1 250",
            "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
            "ip route 192.168.1.0 255.255.255.0 FastEthernet0/0 250",
            "ip route 0.0.0.0 250 192.168.1.1"
        ],
        correct: 0,
        explanation: "A floating static route uses a higher administrative distance than primary dynamic routing protocols so it only becomes active if the primary route fails. The AD is appended at the end of the route command."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which protocol translates private inside local IP addresses to public inside global IP addresses for internet connectivity?",
        options: [
            "DHCP",
            "NAT",
            "DNS",
            "PAT"
        ],
        correct: 1,
        explanation: "Network Address Translation (NAT) modifies IP address information in packet header IP packets while in transit across a traffic routing device."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "What is the primary purpose of configuring an Access Control List (ACL) on a router interface?",
        options: [
            "To assign dynamic IP addresses to hosts",
            "To filter network traffic based on predefined criteria",
            "To accelerate packet routing speeds",
            "To encrypt data payloads in transit"
        ],
        correct: 1,
        explanation: "ACLs filter network traffic by evaluating source IP, destination IP, ports, or protocols against sequential rule sets to permit or deny packets."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "In RESTful APIs, which HTTP method is typically used to update an existing resource completely or create it if it does not exist?",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        correct: 2,
        explanation: "The PUT method requests that the enclosed resource be stored at the supplied URI. If the resource already exists, it is updated; if not, it can be created."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "Which wireless standard operates exclusively in the 5 GHz band and provides high data rates up to several gigabits per second?",
        options: [
            "802.11b",
            "802.11g",
            "802.11ac",
            "802.11n"
        ],
        correct: 2,
        explanation: "802.11ac (WiFi 5) operates exclusively in the 5 GHz band, utilizing wider channels and advanced modulation techniques like 256-QAM."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which command verifies trunking status, native VLAN, and allowed VLANs on a Cisco switch interface?",
        options: [
            "show ip interface brief",
            "show interfaces trunk",
            "show vlan brief",
            "show etherchannel summary"
        ],
        correct: 1,
        explanation: "The 'show interfaces trunk' command provides detailed information regarding active trunk ports, encapsulation types, native VLAN settings, and permitted VLAN filters."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "What metric does OSPF use to calculate its path cost?",
        options: [
            "Hop count",
            "Bandwidth",
            "Delay and Reliability",
            "Load and MTU"
        ],
        correct: 1,
        explanation: "OSPF uses bandwidth as its metric, specifically calculated using reference bandwidth divided by interface bandwidth (Cost = Reference Bandwidth / Interface Bandwidth)."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which component of DHCP allocation ensures that a specific physical device always receives the same IP address lease?",
        options: [
            "Dynamic allocation",
            "Automatic allocation",
            "DHCP reservation / static binding",
            "IP pooling"
        ],
        correct: 2,
        explanation: "DHCP reservation binds a specific client MAC address to a designated IP address within the DHCP server configuration pool."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "Which multi-factor authentication factor category includes fingerprints, retinal scans, and facial recognition?",
        options: [
            "Something you know",
            "Something you have",
            "Something you are",
            "Somewhere you are"
        ],
        correct: 2,
        explanation: "Biometric verification falls under 'Something you are', representing unique physical or behavioral human characteristics."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "What response status code range indicates a successful HTTP request in REST APIs?",
        options: [
            "1xx",
            "2xx",
            "4xx",
            "5xx"
        ],
        correct: 1,
        explanation: "HTTP status codes in the 2xx range (such as 200 OK or 201 Created) indicate that the request was successfully received, understood, and accepted."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "Which layer of the OSI model handles data compression, encryption, and translation of data formats between application and network formats?",
        options: [
            "Application layer",
            "Presentation layer",
            "Session layer",
            "Transport layer"
        ],
        correct: 1,
        explanation: "The Presentation layer (Layer 6) ensures that data is readable by the application by managing data formatting, encryption, and compression."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "What is the primary purpose of configuring a native VLAN on an 802.1Q trunk link?",
        options: [
            "To encrypt control plane traffic",
            "To handle untagged frames entering the trunk port",
            "To prioritize voice packets over data packets",
            "To separate management traffic from user traffic"
        ],
        correct: 1,
        explanation: "Frames belonging to the native VLAN traverse an 802.1Q trunk link without an explicit VLAN tag. Untagged frames received on the trunk are assigned to the native VLAN."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "What is the default hello timer interval for OSPF running on a broadcast multi-access network like Ethernet?",
        options: [
            "5 seconds",
            "10 seconds",
            "30 seconds",
            "60 seconds"
        ],
        correct: 1,
        explanation: "On OSPF broadcast and point-to-point networks, the default hello interval is 10 seconds, with a dead interval of 40 seconds (4 times the hello timer)."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which DNS record type maps an IPv4 address to a domain name for reverse DNS lookups?",
        options: [
            "A record",
            "AAAA record",
            "CNAME record",
            "PTR record"
        ],
        correct: 3,
        explanation: "A Pointer (PTR) record is used for reverse DNS lookups to resolve an IP address back to its corresponding domain name."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "Which protocol replaces Telnet for secure, encrypted remote command-line access to network devices?",
        options: [
            "HTTP",
            "SSH",
            "SNMPv3",
            "TFTP"
        ],
        correct: 1,
        explanation: "Secure Shell (SSH) provides secure, encrypted cryptographic communication for remote login and network management, replacing insecure clear-text protocols like Telnet."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "Which configuration management tool is agentless and uses SSH to execute tasks and push configurations onto network devices?",
        options: [
            "Puppet",
            "Chef",
            "Ansible",
            "SaltStack"
        ],
        correct: 2,
        explanation: "Ansible is an open-source, agentless automation engine that connects via standard SSH (or NETCONF/RESTCONF for network gear) to execute playbooks."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "Which device operates primarily at Layer 3 of the OSI model and makes forwarding decisions based on destination IP addresses?",
        options: [
            "Hub",
            "Layer 2 Switch",
            "Router",
            "Repeater"
        ],
        correct: 2,
        explanation: "Routers operate at Layer 3 (Network Layer) and use routing tables and IP addresses to forward packets across different subnets or networks."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which command enables Rapid PVST+ as the active Spanning Tree protocol mode on a Cisco switch?",
        options: [
            "spanning-tree mode stp",
            "spanning-tree mode rapid-pvst",
            "spanning-tree mode mst",
            "spanning-tree pvst fast"
        ],
        correct: 1,
        explanation: "The command 'spanning-tree mode rapid-pvst' configures the switch to run Rapid Per-VLAN Spanning Tree Plus (IEEE 802.1w)."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "What is the destination IP address used by OSPF routers to send link-state packets to all OSPF routers on a broadcast segment?",
        options: [
            "224.0.0.5",
            "224.0.0.6",
            "255.255.255.255",
            "192.168.1.255"
        ],
        correct: 0,
        explanation: "224.0.0.6 is the multicast address for designated routers (DR/BDR), while 224.0.0.5 is the destination multicast address for AllSPFRouters."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which command displays active NAT translation entries on a Cisco router?",
        options: [
            "show ip route",
            "show ip nat translations",
            "show ip interface brief",
            "show ip dhcp binding"
        ],
        correct: 1,
        explanation: "The 'show ip nat translations' command lists active Network Address Translation mappings currently cached in router memory."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "What security vulnerability is mitigated by implementing DHCP snooping on access switches?",
        options: [
            "MAC flooding",
            "Rogue DHCP servers",
            "ARP spoofing",
            "IP source routing"
        ],
        correct: 1,
        explanation: "DHCP snooping acts as a firewall between untrusted hosts and trusted DHCP servers, preventing attackers from launching rogue DHCP server attacks or assigning unauthorized gateway information."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "Which data format stores tabular data in plain text where values are separated by commas?",
        options: [
            "JSON",
            "XML",
            "YAML",
            "CSV"
        ],
        correct: 3,
        explanation: "Comma-Separated Values (CSV) files use commas to separate distinct data columns in tabular text records."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "What type of fiber optic cable is best suited for long-distance telecommunications and campus backbones due to its small core size?",
        options: [
            "Single-mode fiber (SMF)",
            "Multi-mode fiber (MMF)",
            "Plastic optical fiber (POF)",
            "Coaxial cable"
        ],
        correct: 0,
        explanation: "Single-mode fiber has a very small core diameter that allows only a single light ray mode to propagate, minimizing attenuation over long distances."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which protocol is an IEEE standard open-protocol alternative to Cisco's proprietary VTP (VLAN Trunking Protocol)?",
        options: [
            "STP",
            "GVRP / MVRP",
            "CDP",
            "LACP"
        ],
        correct: 1,
        explanation: "GARP VLAN Registration Protocol (GVRP) and its successor Multiple VLAN Registration Protocol (MVRP) are IEEE standards for dynamic VLAN propagation across trunks."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "When a router receives a packet with a destination IP address that does not match any route in its routing table, what does it do?",
        options: [
            "Broadcasts the packet to all interfaces",
            "Discards the packet and sends an ICMP Destination Unreachable message",
            "Stores the packet in buffer memory indefinitely",
            "Floods the packet out all trunk ports"
        ],
        correct: 1,
        explanation: "If no matching route (nor a default gateway route) exists in the routing table, the router drops the packet and responds with an ICMP Destination Unreachable notification."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which protocol version of SNMP introduced robust security features including user authentication and message encryption using DES or AES?",
        options: [
            "SNMPv1",
            "SNMPv2c",
            "SNMPv3",
            "SNMPv4"
        ],
        correct: 2,
        explanation: "SNMPv3 introduced User-Based Security Model (USM) and View-Based Access Control Model (VACM), adding vital security features like data integrity, authentication, and encryption."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "What function does an IP Source Guard feature provide on a Cisco switch?",
        options: [
            "Filters IP traffic based on DHCP snooping database bindings to prevent IP spoofing",
            "Encrypts all packet headers traversing access ports",
            "Blocks unauthorized bridge protocol data units",
            "Inspects deep packet contents for malware signatures"
        ],
        correct: 0,
        explanation: "IP Source Guard leverages DHCP snooping and static IP source bindings to filter out malicious traffic originating from hosts attempting IP address spoofing."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "What is a major advantage of using REST APIs over legacy screen-scraping CLI automation?",
        options: [
            "REST APIs require zero network bandwidth",
            "REST APIs return structured, easily parseable data formats like JSON or XML",
            "REST APIs only function over serial console lines",
            "REST APIs eliminate the need for IP addresses"
        ],
        correct: 1,
        explanation: "Structured data formats like JSON or XML returned by REST APIs allow automation scripts to parse status and statistics programmatically without parsing raw CLI text output."
    },
    {
        domain: "Network Fundamentals",
        type: "multiple",
        question: "Which IEEE standard defines Power over Ethernet (PoE), supplying up to 15.4W of DC power over twisted-pair Ethernet cables?",
        options: [
            "802.3af",
            "802.3at",
            "802.3bt",
            "802.11i"
        ],
        correct: 0,
        explanation: "IEEE 802.3af is the original PoE standard providing up to 15.4W per port. 802.3at (PoE+) provides up to 30W."
    },
    {
        domain: "Network Access",
        type: "multiple",
        question: "Which command configures an interface as an access port and assigns it to VLAN 20?",
        options: [
            "switchport trunk native vlan 20",
            "switchport mode access",
            "switchport access vlan 20",
            "switchport mode dynamic desirable"
        ],
        correct: 2,
        explanation: "The command sequence 'switchport mode access' followed by 'switchport access vlan 20' explicitly places a switch port into access mode and maps it to VLAN 20."
    },
    {
        domain: "IP Connectivity",
        type: "multiple",
        question: "Which command displays the current IPv4 routing table on a Cisco IOS router?",
        options: [
            "show ip route",
            "show ip protocols",
            "show ip interface brief",
            "show cdp neighbors"
        ],
        correct: 0,
        explanation: "The 'show ip route' command provides a complete breakdown of all known routes, subnet masks, administrative distances, metrics, and exit interfaces."
    },
    {
        domain: "IP Services",
        type: "multiple",
        question: "Which protocol uses UDP port 67 for servers and UDP port 68 for clients to assign IP configurations automatically?",
        options: [
            "DNS",
            "DHCP",
            "FTP",
            "TFTP"
        ],
        correct: 1,
        explanation: "Dynamic Host Configuration Protocol (DHCP) server processes listen on UDP port 67, while client broadcast requests originate from UDP port 68."
    },
    {
        domain: "Security Fundamentals",
        type: "multiple",
        question: "What type of wireless security standard introduced SAE (Simultaneous Authentication of Equals) to provide robust protection against offline dictionary attacks?",
        options: [
            "WEP",
            "WPA2-Enterprise",
            "WPA3",
            "WPA-PSK"
        ],
        correct: 2,
        explanation: "WPA3 utilizes SAE to securely complete key exchange and authentication, preventing offline dictionary attacks even when weak passwords are chosen by users."
    },
    {
        domain: "Automation and Programmability",
        type: "multiple",
        question: "Which protocol is used by controllers in software-defined networking (SDN) to manage and program forwarding behavior on network data plane switches?",
        options: [
            "Telnet",
            "OpenFlow",
            "HTTP",
            "ARP"
        ],
        correct: 1,
        explanation: "OpenFlow is a foundational SDN communication protocol that allows an external controller to direct the forwarding plane of network switches directly."
    },
  {
    domain: "Network Fundamentals",
    type: "dragdrop",
    question: "Match each OSI layer with its protocol data unit (PDU).",
    draggables: ["Bits", "Frames", "Packets", "Segments"],
    dropzones: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    correct: [0, 1, 2, 3],
    explanation: "The Physical layer transmits bits, the Data Link layer uses frames, the Network layer uses packets, and the Transport layer uses segments."
  },
  {
    domain: "Network Fundamentals",
    type: "dragdrop",
    question: "Match each IPv6 address type with its common prefix.",
    draggables: ["fe80::/10", "fc00::/7", "2000::/3", "ff00::/8"],
    dropzones: ["Link-local", "Unique local", "Global unicast", "Multicast"],
    correct: [0, 1, 2, 3],
    explanation: "Link-local addresses use fe80::/10, unique local addresses use fc00::/7, global unicast addresses use 2000::/3, and multicast addresses use ff00::/8."
  },
  {
    domain: "Network Access",
    type: "dragdrop",
    question: "Match each switchport mode with its forwarding behavior.",
    draggables: ["Carries traffic for one VLAN", "Carries multiple VLANs with 802.1Q tags", "Negotiates trunking dynamically", "Forces the interface to be non-trunking"],
    dropzones: ["Access mode", "Trunk mode", "Dynamic desirable mode", "Dynamic auto mode"],
    correct: [0, 1, 2, 3],
    explanation: "Access ports carry one VLAN, trunk ports carry tagged VLAN traffic, dynamic desirable actively negotiates a trunk, and dynamic auto waits for the other side to initiate negotiation."
  },
  {
    domain: "Network Access",
    type: "dragdrop",
    question: "Match each Spanning Tree Protocol port role with its purpose.",
    draggables: ["The best path toward the root bridge", "The forwarding port for a LAN segment", "A backup path that does not forward", "The elected bridge for the Layer 2 topology"],
    dropzones: ["Root port", "Designated port", "Alternate port", "Root bridge"],
    correct: [0, 1, 2, 3],
    explanation: "A root port is a switch's best path to the root bridge. A designated port forwards on a segment. An alternate port is a blocked backup path. The root bridge is the STP reference bridge."
  },
  {
    domain: "IP Connectivity",
    type: "dragdrop",
    question: "Match each routing protocol with its administrative distance by default.",
    draggables: ["110", "120", "90", "115"],
    dropzones: ["OSPF", "RIP", "EIGRP internal", "IS-IS"],
    correct: [0, 1, 2, 3],
    explanation: "The default administrative distances are OSPF 110, RIP 120, EIGRP internal 90, and IS-IS 115."
  },
  {
    domain: "IP Connectivity",
    type: "dragdrop",
    question: "Match each route type with the information it represents in a routing table.",
    draggables: ["Network directly attached to a router interface", "Manually configured next hop or exit interface", "Route learned through OSPF", "Route used when no more-specific match exists"],
    dropzones: ["Connected route", "Static route", "OSPF route", "Default route"],
    correct: [0, 1, 2, 3],
    explanation: "Connected routes come from active interfaces, static routes are manually configured, OSPF routes are dynamically learned, and a default route is used only when no longer prefix match exists."
  },
  {
    domain: "IP Connectivity",
    type: "dragdrop",
    question: "Match each first-hop redundancy protocol with its description.",
    draggables: ["Cisco proprietary protocol using an active and standby router", "Open standard protocol using a master and backup router", "Cisco proprietary protocol that load balances across multiple active gateways"],
    dropzones: ["HSRP", "VRRP", "GLBP"],
    correct: [0, 1, 2],
    explanation: "HSRP is Cisco proprietary and elects active/standby gateways. VRRP is an open standard with master/backup roles. GLBP is Cisco proprietary and supports gateway load balancing."
  },
  {
    domain: "IP Services",
    type: "dragdrop",
    question: "Match each common network service with its default transport protocol and port.",
    draggables: ["UDP 67/68", "UDP 53", "TCP 22", "UDP 123"],
    dropzones: ["DHCP", "DNS", "SSH", "NTP"],
    correct: [0, 1, 2, 3],
    explanation: "DHCP uses UDP 67 and 68, DNS commonly uses UDP 53, SSH uses TCP 22, and NTP uses UDP 123."
  },
  {
    domain: "Security Fundamentals",
    type: "dragdrop",
    question: "Match each AAA function with its purpose.",
    draggables: ["Verifies a user's identity", "Determines what an authenticated user may do", "Records user activity and session information"],
    dropzones: ["Authentication", "Authorization", "Accounting"],
    correct: [0, 1, 2],
    explanation: "Authentication verifies identity, authorization assigns permitted actions, and accounting records what occurred during a session."
  },
  {
    domain: "Automation & Programmability",
    type: "dragdrop",
    question: "Match each API method with its typical REST operation.",
    draggables: ["Retrieve a resource", "Create a resource", "Replace or update a resource", "Remove a resource"],
    dropzones: ["GET", "POST", "PUT", "DELETE"],
    correct: [0, 1, 2, 3],
    explanation: "GET retrieves resources, POST creates resources, PUT replaces or updates resources, and DELETE removes resources."
  }
];
questions.push(...dragDropQuestions);

const diagramQuestions = [
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the topology. Which next hop should R1 select for traffic destined to 10.10.10.25?",
    diagram: { src: "assets/topology-longest-prefix.svg", alt: "R1 has a route through R2 to 10.10.0.0 slash 16 and through R3 to 10.10.10.0 slash 24.", caption: "Routing-table longest-prefix-match scenario" },
    options: ["R2, because the /16 route has the lower metric", "R3, because 10.10.10.0/24 is the longest prefix match", "R2, because static routes always override OSPF routes", "Both R2 and R3, using equal-cost load balancing"],
    correct: 1,
    explanation: "Routing uses the most specific matching prefix first. The /24 route through R3 is more specific than the /16 route through R2."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "Refer to the topology. Which configuration is required on the link between SW1 and SW2 so PCs in the same VLAN can communicate across the switches?",
    diagram: { src: "assets/topology-vlan-trunk.svg", alt: "SW1 and SW2 connect over an 802.1Q trunk. VLAN 10 and VLAN 20 exist on both switches.", caption: "VLAN trunking scenario" },
    options: ["Configure both link interfaces as access ports in VLAN 10", "Configure an 802.1Q trunk and allow VLANs 10 and 20", "Configure routed ports with IP addresses on both switches", "Disable DTP and assign the link to VLAN 20 only"],
    correct: 1,
    explanation: "A trunk carries multiple VLANs between switches. VLANs 10 and 20 must be allowed across the trunk for end hosts in each VLAN to communicate."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Refer to the topology. Which NAT role should be applied to R1's interface connected to the private LAN?",
    diagram: { src: "assets/topology-nat.svg", alt: "Private LAN 192.168.10.0 slash 24 connects to R1, which has an inside interface 192.168.10.1 and outside interface 203.0.113.2 toward the internet.", caption: "NAT inside/outside interface scenario" },
    options: ["ip nat outside", "ip nat inside", "ip helper-address", "ip nat pool"],
    correct: 1,
    explanation: "The interface facing the private, translated-address side of the network is configured with ip nat inside. The internet-facing interface is configured with ip nat outside."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the OSPF topology. What role does R2 perform?",
    diagram: { src: "assets/topology-ospf.svg", alt: "R1 in OSPF Area 1 connects to R2, which connects into Area 0 to R3.", caption: "Multi-area OSPF scenario" },
    options: ["Autonomous system boundary router", "Area border router", "Designated router", "Backup designated router"],
    correct: 1,
    explanation: "R2 has an interface in Area 1 and an interface in Area 0, so it is an area border router (ABR)."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Refer to the topology. Where should an extended ACL that filters traffic from the user network to the server network be placed?",
    diagram: { src: "assets/topology-acl.svg", alt: "Users in 10.20.30.0 slash 24 connect through R1 to servers in 172.16.50.0 slash 24.", caption: "Extended ACL placement scenario" },
    options: ["Inbound on R1's interface closest to the users", "Outbound on R1's interface closest to the users", "Inbound on R1's interface closest to the servers", "On the server NICs only"],
    correct: 0,
    explanation: "Extended ACLs are generally placed as close to the source as possible to stop unwanted traffic before it crosses the network."
  }
];

questions.push(...diagramQuestions);

// Low-frequency details that are still useful to recognize on a CCNA exam.
const memorizationQuestions = [
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "What is the minimum valid Ethernet frame size, excluding the preamble and start frame delimiter?",
    options: ["46 bytes", "64 bytes", "128 bytes", "1518 bytes"],
    correct: 1,
    explanation: "A valid Ethernet frame is at least 64 bytes from destination MAC address through the frame check sequence. Frames with less payload are padded."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Which IPv6 multicast address represents all nodes on the local link?",
    options: ["FF02::1", "FF02::2", "FE80::1", "FF05::1:3"],
    correct: 0,
    explanation: "FF02::1 is the link-local all-nodes multicast address. FF02::2 is the all-routers multicast address."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "What is the default IEEE 802.1D STP bridge priority before the VLAN system ID extension is added?",
    options: ["0", "4096", "32768", "65535"],
    correct: 2,
    explanation: "The default STP bridge priority is 32768. With the extended system ID, the VLAN ID is incorporated into the bridge ID."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "By default, which VLAN is assigned to an access port on a Cisco switch?",
    options: ["VLAN 0", "VLAN 1", "VLAN 1002", "The native VLAN"],
    correct: 1,
    explanation: "Cisco switch access ports are assigned to VLAN 1 by default. VLAN 1 is also the default native VLAN on an 802.1Q trunk unless changed."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which IPv4 multicast address do OSPF routers use to send Hello packets to all OSPF routers on a multiaccess network?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correct: 0,
    explanation: "OSPF uses 224.0.0.5 for AllSPFRouters and 224.0.0.6 for AllDRouters."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Which IP protocol number identifies EIGRP packets?",
    options: ["6", "17", "88", "89"],
    correct: 2,
    explanation: "EIGRP uses IP protocol number 88. TCP is 6, UDP is 17, and OSPF is 89."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Which default UDP port is used by a device to send syslog messages to a syslog server?",
    options: ["161", "162", "514", "520"],
    correct: 2,
    explanation: "Traditional syslog uses UDP port 514. SNMP uses UDP 161, and SNMP traps commonly use UDP 162."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Which UDP port is the standard destination for SNMP trap or inform notifications?",
    options: ["53", "161", "162", "514"],
    correct: 2,
    explanation: "SNMP managers listen on UDP 162 for traps and informs. SNMP polling normally uses UDP 161."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which transport protocol and port does TACACS+ use by default?",
    options: ["UDP 49", "TCP 49", "UDP 1812", "TCP 1812"],
    correct: 1,
    explanation: "TACACS+ uses TCP port 49. RADIUS authentication conventionally uses UDP port 1812."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Which UDP port is conventionally used for RADIUS authentication?",
    options: ["49", "1812", "1813", "1645"],
    correct: 1,
    explanation: "RADIUS authentication uses UDP 1812 and RADIUS accounting uses UDP 1813."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Which HTTP Content-Type header value identifies a JSON request or response body?",
    options: ["text/json", "application/json", "application/xml", "text/plain"],
    correct: 1,
    explanation: "The standard media type for JSON is application/json."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Which RESTCONF/REST-style HTTP method is typically used to apply a partial update to an existing resource?",
    options: ["GET", "POST", "PATCH", "DELETE"],
    correct: 2,
    explanation: "PATCH applies a partial update. GET retrieves, POST creates or submits, and DELETE removes a resource."
  }
];

questions.push(...memorizationQuestions);

// Command-analysis questions: interpret realistic Cisco IOS show-command output.
const commandAnalysisQuestions = [
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the routing table. Which route will R1 use for a packet destined to 192.168.10.70?",
    snippet: "R1# show ip route\n\nS    192.168.10.0/24 [1/0] via 10.0.0.2\nO    192.168.10.64/26 [110/20] via 10.0.0.3\nO    192.168.0.0/16 [110/50] via 10.0.0.4",
    options: ["The static 192.168.10.0/24 route via 10.0.0.2", "The OSPF 192.168.10.64/26 route via 10.0.0.3", "The OSPF 192.168.0.0/16 route via 10.0.0.4", "All three routes using load balancing"],
    correct: 1,
    explanation: "192.168.10.70 is within 192.168.10.64/26. Longest-prefix match takes precedence over administrative distance and metric."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "Refer to the output. Why can a host connected to Gi0/2 not communicate with other devices in VLAN 20?",
    snippet: "SW1# show vlan brief\n\nVLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi0/1\n20   USERS                            active\n30   VOICE                            active    Gi0/3",
    options: ["VLAN 20 is suspended", "Gi0/2 is not assigned to VLAN 20", "Gi0/2 must be configured as a routed port", "VLAN 20 must be configured as the native VLAN"],
    correct: 1,
    explanation: "VLAN 20 is active, but no access ports are listed in that VLAN. Gi0/2 needs to be assigned with switchport access vlan 20."
  },
  {
    domain: "Network Access",
    type: "single",
    question: "Refer to the output. Which VLAN is prevented from crossing the trunk on Gi0/1?",
    snippet: "SW1# show interfaces trunk\n\nPort        Mode         Encapsulation  Status        Native vlan\nGi0/1       on           802.1q         trunking      99\n\nPort        Vlans allowed on trunk\nGi0/1       10,20,30\n\nPort        Vlans allowed and active in management domain\nGi0/1       10,20,30",
    options: ["VLAN 10", "VLAN 20", "VLAN 30", "VLAN 99"],
    correct: 3,
    explanation: "VLAN 99 is the native VLAN, but it is not included in the allowed VLAN list. VLANs 10, 20, and 30 are allowed on the trunk."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the output. What is the operational state of GigabitEthernet0/1?",
    snippet: "R1# show ip interface brief\n\nInterface              IP-Address      OK? Method Status                Protocol\nGigabitEthernet0/0     10.1.1.1        YES manual up                    up\nGigabitEthernet0/1     unassigned      YES unset  administratively down down\nGigabitEthernet0/2     10.2.2.1        YES manual up                    down",
    options: ["Up/up", "Administratively down/down", "Up/down", "Down/down because of a physical failure"],
    correct: 1,
    explanation: "Administratively down means the interface has been shut down with the shutdown command. It requires no shutdown to enable it."
  },
  {
    domain: "Network Fundamentals",
    type: "single",
    question: "Refer to the output. What device is directly connected to SW1 on Gi0/1?",
    snippet: "SW1# show cdp neighbors\n\nDevice ID        Local Intrfce     Holdtme    Capability  Platform  Port ID\nR1               Gig 0/1           153       R S I       ISR4331   Gig 0/0\nSW2              Gig 0/2           146       S I         C9300     Gig 1/0/1",
    options: ["An ISR4331 router named R1", "A C9300 switch named SW2", "An ISR4331 router named SW2", "A C9300 switch named R1"],
    correct: 0,
    explanation: "The Gi0/1 row identifies neighbor R1, with platform ISR4331 and router capabilities."
  },
  {
    domain: "IP Connectivity",
    type: "single",
    question: "Refer to the output. What does the OSPF neighbor state indicate?",
    snippet: "R1# show ip ospf neighbor\n\nNeighbor ID     Pri   State           Dead Time   Address         Interface\n2.2.2.2           1   FULL/DR        00:00:33    10.0.12.2       GigabitEthernet0/0",
    options: ["The adjacency is fully established and the neighbor is the DR", "The adjacency is not established because the neighbor is in Init", "R1 is the DR and the neighbor is the BDR", "The neighbor is unreachable"],
    correct: 0,
    explanation: "FULL means the OSPF adjacency is established. FULL/DR indicates that the listed neighbor is the designated router on the segment."
  },
  {
    domain: "IP Services",
    type: "single",
    question: "Refer to the output. Which private host is currently being translated to the inside global address 203.0.113.10?",
    snippet: "R1# show ip nat translations\n\nPro  Inside global         Inside local          Outside local         Outside global\nicmp 203.0.113.10:3      192.168.1.10:3       8.8.8.8:3             8.8.8.8:3\ntcp  203.0.113.10:49152  192.168.1.25:49152   198.51.100.20:443     198.51.100.20:443",
    options: ["192.168.1.10 only", "192.168.1.25 only", "Both 192.168.1.10 and 192.168.1.25", "Neither host; 203.0.113.10 is an outside local address"],
    correct: 2,
    explanation: "Both entries use 203.0.113.10 as the inside global address, demonstrating PAT with different protocol/port identifiers."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Refer to the output. Why is the second device attempting to connect on Fa0/10 unable to access the network?",
    snippet: "SW1# show port-security interface fa0/10\n\nPort Security              : Enabled\nPort Status                : Secure-shutdown\nViolation Mode             : Shutdown\nMaximum MAC Addresses      : 1\nTotal MAC Addresses        : 1\nSecurity Violation Count   : 1",
    options: ["The port is in err-disabled state after exceeding its secure MAC limit", "The port has been configured as a trunk", "The port is waiting for a DHCP lease", "The port is disabled because STP selected an alternate path"],
    correct: 0,
    explanation: "The port allows only one secure MAC address and uses shutdown violation mode. A violation puts the port into secure-shutdown (err-disabled) state."
  },
  {
    domain: "Security Fundamentals",
    type: "single",
    question: "Refer to the output. What traffic is permitted by the ACL?",
    snippet: "R1# show access-lists 110\nExtended IP access list 110\n    10 permit tcp 10.10.10.0 0.0.0.255 host 172.16.1.10 eq 443\n    20 deny ip any any",
    options: ["Any IP traffic from 10.10.10.0/24 to 172.16.1.10", "HTTPS traffic from 10.10.10.0/24 to 172.16.1.10", "HTTPS traffic from any source to 172.16.1.10", "All traffic to TCP port 443"],
    correct: 1,
    explanation: "Sequence 10 permits TCP traffic from 10.10.10.0/24 to the specific host 172.16.1.10 when the destination port is 443 (HTTPS)."
  },
  {
    domain: "Automation & Programmability",
    type: "single",
    question: "Refer to the output. Which data format is shown?",
    snippet: "R1# show running-config | format json\n{\n  \"interfaces\": [\n    {\n      \"name\": \"GigabitEthernet1\",\n      \"enabled\": true\n    }\n  ]\n}",
    options: ["XML", "JSON", "YAML", "NETCONF RPC"],
    correct: 1,
    explanation: "The curly braces, quoted keys, array brackets, and true Boolean value identify JSON."
  }
];

questions.push(...commandAnalysisQuestions);
