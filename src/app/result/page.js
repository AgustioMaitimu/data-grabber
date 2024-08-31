'use client';

import { useState, useEffect } from 'react';
import CLI from '@/components/CLI';
import { useRouter } from 'next/navigation';

export default function CommandLine() {
  const [phase, setPhase] = useState('hack');
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const data = {};
    for (const [key, value] of queryParams.entries()) {
      data[key] = decodeURIComponent(value);
    }
    setFormData(data);
  }, []);

  useEffect(() => {
    const timerIntermission = setTimeout(() => {
      setPhase('intermission');
    }, 7000);

    const timerResult = setTimeout(() => {
      setPhase('result');
    }, 15000);

    return () => clearTimeout(timerIntermission, timerResult);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  const hackBlocks = [
    `> Initializing data breach sequence...\n> Connecting to secure server... [OK]\n> Establishing encrypted connection... [OK]\n> Accessing target database... [OK]\n> Bypassing firewalls... [OK]\n> Spoofing IP address... [OK]`,
    `\n> Extraction in progress...\n> Full Name: [${formData.name}] ✓\n> Email: [${formData.email}] ✓\n> Phone Number: [${formData.phoneNumber}] ✓\n> Mother's Name: [${formData.motherName}] ✓\n> Date of Birth: [${formData.dateOfBirth}] ✓\n> Social Security Number: [${formData.SSN}] ✓`,
    '\n> Cracking password encryption...\n> [@@@@@@@@@@@@@@@@@@@.........] 62% Complete\n> [@@@@@@@@@@@@@@@@@@@@@@@@@@..] 98% Complete\n> Password decrypted: ************ [SUCCESS]',
    '\n> Injecting backdoor exploit...\n> Trojan upload: [000000000000000000....] 34% Complete\n> Trojan upload: [@@@@@@@@@@@@@@@@@@@@@@@@@@] 100% Complete\n> Exploit successful. System access granted.',
    '\n> Downloading sensitive files...\n> user_data.json [██████████░░░░░░░░░░] 50% Complete\n> financial_records.xlsx [███████████████░░] 75% Complete\n> darkweb_credentials.txt [████████████████] 100% Complete\n> Download complete. Files saved to local storage.',
    '\n> Data breach complete. Exfiltrated 1.2GB of sensitive data.\n> Shutting down access tunnels...\n> Disconnecting from server...\n> Connection terminated. All traces removed.\n> Operation successful. System compromised.',
  ];

  const resultBlocks = [
    `> Personal Data:\n  - Full Name: ${formData.name}\n  - Social Security Number: ${formData.SSN}\n  - Date of Birth: ${formData.dateOfBirth}\n  - Phone Number: ${formData.phoneNumber}\n  - Email: ${formData.email}\n  - Mother's Name: ${formData.motherName}`,
    `\n> Bank Account Information:\n  - Bank: Bank of America\n  - Account Number: 123456789012\n  - Routing Number: 026009593\n  - Balance: $34,567.89\n  - Recent Transactions: \n    - $5,000 Wire Transfer to Offshore Account (07/20/2024)\n    - $1,200 Purchase at Luxury Electronics (07/22/2024)`,
    `\n> Credit Card Details:\n  - Card Number: 4111 1111 1111 1111\n  - Expiration Date: 08/25\n  - CVV: 123\n  - Available Credit: $15,000\n  - Recent Charges: \n    - $1,500 at High-End Jewelry Store\n    - $800 at Hotel in Las Vegas\n    - $400 at Online Crypto Exchange`,
    `\n> Online Account Details:\n  - Email: johndoe@gmail.com\n  - Password: p@ssw0rd123\n  - 2FA Backup Codes: \n    - 9f3b1c2a\n    - 7d6a8e9f\n  - Associated Accounts: \n    - Facebook: fb_johndoe\n    - Instagram: insta_johndoe87\n    - Twitter: @john_doe_official`,
    `\n> Location Data:\n  - Last Known Location: 40.712776, -74.005974 (New York, NY)\n  \n  - Frequent Locations: \n    - Home: 1234 Elm St, Springfield, IL\n    - Workplace: 555 Corporate Dr, Springfield, IL`,
    `\nPress Esc to exit...`,
  ];

  const intermissionBlocks = [
    `>
                 uuuuuuu
             uu$$$$$$$$$$$uu
          uu$$$$$$$$$$$$$$$$$uu
         u$$$$$$$$$$$$$$$$$$$$$u
        u$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$"   "$$$"   "$$$$$$u
       "$$$$"      u$u       $$$$"
        $$$u       u$u       u$$$
        $$$u      u$$$u      u$$$
         "$$$$uu$$$   $$$uu$$$$"
          "$$$$$$$"   "$$$$$$$"
            u$$$$$$$u$$$$$$$u
             u$"$"$"$"$"$"$u
  uuu        $$u$ $ $ $ $u$$       uuu
 u$$$$        $$$$$u$u$u$$$       u$$$$
  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
 """      ""$$$$$$$$$$$uu ""$"""
           uuuu ""$$$$$$$$$$uuu
  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
  $$$$$$$$$$""""           ""$$$$$$$$$$$"
   "$$$$$"                      ""$$$$""
     $$$"                         $$$$"

        We lied, we stole your data
        (Im joking, please hire me)
        `,
  ];

  return (
    <main className="cli flex min-h-screen flex-col items-start justify-start overflow-auto bg-black text-white">
      <div className="w-full max-w-4xl bg-black p-4">
        <div className="whitespace-pre-wrap break-words font-mono text-xs text-green-500">
          {phase === 'hack' && <CLI blocks={hackBlocks} />}
          {phase === 'intermission' && <CLI blocks={intermissionBlocks} />}
          {phase === 'result' && <CLI blocks={resultBlocks} />}
        </div>
      </div>
    </main>
  );
}
