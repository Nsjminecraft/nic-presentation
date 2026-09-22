# NIC Study Guide — English 10 Comp Presentation

Everything you need to know to answer questions about Network Interface Cards.

---

## 1. What is a NIC?

- **NIC = Network Interface Card**
- A hardware component that connects a computer to a network
- It's the physical bridge between your computer and the network
- Without a NIC, you have no network connectivity and no internet

### Three core functions:
1. **Enables Communication** — sends and receives data across a network
2. **MAC Address** — each NIC has a unique 48-bit hardware address (burned into ROM at the factory, 281 trillion possible addresses)
3. **Signal Conversion** — converts digital data into electrical signals (copper), light pulses (fiber), or radio waves (wireless)

### Key functions:
- Data transmission and reception
- Media Access Control (MAC)
- Signal encoding and decoding

### Why it matters:
- Without a NIC, no network connectivity
- Determines your network speed capabilities
- Essential for internet access

### Data flow path:
Computer → NIC → Cable → Network (switch/router)

---

## 2. Types of NICs

### PCIe NIC
- Dedicated expansion card installed in a PCIe slot on the motherboard
- Highest performance, lowest latency
- Common in servers and gaming PCs

### USB NIC
- External adapter that connects via USB port
- Portable, flexible, plug-and-play
- Good for laptops

### Onboard NIC
- Built directly into the motherboard
- Most common in modern computers
- No extra cost, sufficient for most users

### Wireless NIC
- WiFi adapter with antenna for wireless connectivity
- No cables needed, mobile freedom
- Supports WiFi 6/7

> Most modern laptops and smartphones have **multiple NICs** built in — one for WiFi and one for Bluetooth.

---

## 3. Inside a NIC — Components

| Component | Function |
|-----------|----------|
| **PCIe Connector** | Bus interface connecting NIC to motherboard, provides power and data pathway |
| **MAC Controller** | Handles framing, addressing, error detection (the "rules" of network communication) |
| **PHY Transceiver** | Physical layer transceiver — converts digital data to analog signals |
| **RJ-45 / Fiber Port** | Physical connector for network cable (copper or fiber optic) |
| **EEPROM** | Stores unique MAC address and configuration data |
| **LED Indicators** | Green = link status, amber blinking = activity |
| **Boot ROM** | Enables network boot (PXE) — loads OS from network server |

---

## 4. How a NIC Works (6 steps)

1. **Application Generates Data** — browser, email client, etc. creates data to send
2. **OS Network Stack** — OS breaks data into packets, adds headers (IP, TCP/UDP), routes to NIC driver
3. **Bus Interface** — data travels from CPU to NIC via system bus (PCIe, USB, or integrated bus)
4. **Frame Encapsulation** — NIC wraps data in a frame, adds MAC addresses (source + destination) and error-checking (FCS)
5. **Signal Conversion** — NIC converts digital frame into electrical signals (copper), light pulses (fiber), or radio waves (wireless)
6. **Transmission** — signals travel over the network medium to a switch, router, or wireless access point

> **Key insight:** The NIC handles both the physical transmission AND the data link layer (framing, MAC addressing). It's the bridge between your computer's digital world and the network's physical medium.

---

## 5. Technical Specifications

| Spec | Value | Details |
|------|-------|---------|
| **Speed** | Up to 100 Gbps | Range: 10 Mbps → 100 Gbps |
| **Bus Interface** | PCIe Gen 5 | Also PCIe Gen 3/4, USB 3.2 |
| **Form Factor** | Low Profile | Also full-height, M.2, Mini PCIe |
| **Connectors** | RJ-45 | Also SFP+, QSFP28, LC Fiber |
| **MTBF** | 2 million hours | Mean time between failures |
| **Power Draw** | 1–25W | Integrated ~1W, discrete up to 25W |

---

## 6. Network Standards & Protocols

### Wired:
| Standard | IEEE | Speed | Year | Key Features |
|----------|------|-------|------|--------------|
| Ethernet 1GbE | IEEE 802.3 | 1 Gbps | 1998 | Most common, Cat5e/Cat6 cables, up to 100m |
| Ethernet 10GbE | IEEE 802.3ae | 10 Gbps | 2002 | Enterprise/servers, Cat6a/Cat7, up to 100m |
| Ethernet 25GbE | IEEE 802.3by | 25 Gbps | 2016 | Data center standard, SFP28 transceivers |

### Wireless:
| Standard | IEEE | Speed | Year | Key Features |
|----------|------|-------|------|--------------|
| WiFi 6/6E | IEEE 802.11ax | 9.6 Gbps | 2019/2020 | OFDMA, 2.4/5/6 GHz bands, better device density |
| WiFi 7 | IEEE 802.11be | 46 Gbps | 2024 | 320 MHz channels, multi-link operation, 4K QAM |

---

## 7. Manufacturers & Costs

| Brand | Tagline | Notable Products | Price Range |
|-------|---------|-----------------|-------------|
| **Intel** | Industry Standard | I225-T (2.5GbE, $30), X710-DA2 (10GbE, $200) | $30–$500+ |
| **Realtek** | Value & Integration | RTL8125 (2.5GbE, $20), RTL8111 (1GbE, integrated) | $5–$30 |
| **Broadcom** | Enterprise Networking | BCM57416 (10GbE, $150) | $150–$300+ |
| **NVIDIA** | High Performance Computing | ConnectX-6 (100GbE, $500+) | $500–$1000+ |
| **TP-Link** | Consumer Friendly | TX401 (10GbE, $80) | $10–$80 |

---

## 8. The Future of NICs

| Year | Milestone | Details |
|------|-----------|---------|
| **2024** | WiFi 7 Adoption | IEEE 802.11be, up to 46 Gbps, 320 MHz channels, consumer routers going mainstream |
| **2025** | 25GbE for Consumers | 25G replacing 10G as the fast standard for prosumers |
| **2025** | SmartNICs & DPUs | NVIDIA BlueField, AMD Pensando — offload networking, storage, security to dedicated processors ON the NIC |
| **2026** | AI/ML Offloading | NICs with built-in AI accelerators handle inference workloads directly |
| **2026** | CXL Interconnect | Compute Express Link — shared memory pools across servers, next evolution beyond PCIe |
| **2027+** | 400GbE & 800GbE | QSFP-DD and OSFP connectors, bleeding edge of networking speed |

---

## 9. Fun Facts (good for impressing the teacher)

1. **First Ethernet NIC** was made by **Xerox in 1975** (with DEC and Intel)
2. Every NIC has a **unique 48-bit MAC address** — that's 281 trillion possible addresses
3. A 100GbE NIC can process over **150 million small packets per second**
4. Some NICs have their own **processors** (SmartNICs) — offload encryption, compression, virtualization
5. "Ethernet" is named after **"luminiferous aether"** — the hypothetical medium light was once believed to travel through (19th-century physics)
6. A 400GbE InfiniBand NIC can cost **$1,000+** — sometimes more than the server it plugs into

---

## 10. Bibliography / Sources

1. IEEE 802.3 Ethernet Standard (ieee.org)
2. IEEE 802.11ax/be — WiFi 6/7 (wifi.org)
3. Intel Network Adapters (intel.com/network)
4. Realtek NIC Products (realtek.com)
5. NVIDIA Networking (nvidia.com/networking)
6. Wikipedia: Network Interface Card
7. Tom's Hardware — NIC Reviews
8. "Computer Networking: A Top-Down Approach" — Kurose & Ross (Pearson)

---

## Quick Quiz — Test Yourself

**Q1: What does NIC stand for?**
A) Network Internal Connection
B) Network Interface Card ✅
C) Network Internet Computer
D) Numeric Internet Code

**Q2: Which IEEE standard defines Ethernet?**
A) IEEE 802.11 (that's WiFi)
B) IEEE 802.15 (that's Bluetooth)
C) IEEE 802.3 ✅
D) IEEE 802.5 (that was Token Ring)

---

## Cheat Sheet — Most Likely Questions

| Question | Answer |
|----------|--------|
| What is a NIC? | Hardware that connects a computer to a network |
| What does it do? | Sends/receives data, provides MAC address, converts signals |
| What are the types? | PCIe, USB, Onboard, Wireless |
| What's a MAC address? | Unique 48-bit hardware ID burned into every NIC |
| What standard is Ethernet? | IEEE 802.3 |
| What standard is WiFi? | IEEE 802.11 |
| What are the NIC components? | MAC controller, PHY transceiver, EEPROM, PCIe connector, RJ-45 port, LEDs, Boot ROM |
| How fast can NICs go? | 10 Mbps to 100 Gbps (modern), up to 400/800 Gbps in data centers |
| Who makes NICs? | Intel, Realtek, Broadcom, NVIDIA, TP-Link |
| What's the future? | WiFi 7, SmartNICs/DPUs, AI offloading, CXL, 400/800GbE |
| Who made the first NIC? | Xerox (1975), with DEC and Intel |
| Where does "Ethernet" come from? | "Luminiferous aether" — 19th-century physics term |
