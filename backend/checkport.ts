import net from "net";

const host = "smtp.gmail.com"; // atau host SMTP lain
const ports = [465, 587, 2525]; // port umum SMTP

ports.forEach((port) => {
  const client = net.createConnection({ host, port }, () => {
    console.log(`✅ Connected to ${host}:${port} → Port terbuka`);
    client.end();
  });

  client.on("error", (err) => {
    console.log(`❌ Gagal connect ke ${host}:${port} → ${err.message}`);
  });

  client.setTimeout(10000, () => {
    console.log(`⏱ Timeout untuk ${host}:${port} → kemungkinan port diblokir`);
    client.destroy();
  });
});
