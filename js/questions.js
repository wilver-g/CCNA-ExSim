/* ======================================
   CCNA Practice Exam Simulator
   js/questions.js
   Question Bank & Domain Metadata
====================================== */

const questions = [
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
  }
];
questions.push(...dragDropQuestions)