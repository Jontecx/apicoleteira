import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // =========================================================================
  // 🚀 GUIA DE CONFIGURAÇÃO / INSTRUÇÃO PARA O GITHUB:
  // "Onde devo trocar o nome dos arquivos para subir corretamente no GitHub?"
  // =========================================================================
  //
  // Se você deseja alterar o nome dos arquivos de imagem (como o logotipo ou fotos)
  // para que os seus arquivos sejam exibidos corretamente após subir ao GitHub,
  // aqui estão os locais exatos onde você deve fazer e alterar essas referências:
  //
  // 1. O ARQUIVO DO LOGOTIPO ("logoapicoleteira.jpg")
  //    - O arquivo de logotipo que você enviar (ex: "logoapicoleteira.jpg") deve ser colocado:
  //      👉 na pasta de ativos públicos, ou diretamente na raiz da pasta "public" do seu projeto Vite.
  //      Se a pasta "public" não existir na raiz, você pode criá-la e colocar a imagem nela.
  //      Todos os arquivos dentro da pasta "public" são copiados diretamente para o "dist/" gerado na build.
  //
  // 2. REFERÊNCIAS NO FRONTEND (Exatamente nas seguintes linhas de "/src/App.tsx"):
  //    - LINHA ~203: No cabeçalho (Header), onde está o componente de logotipo:
  //      src="logoapicoleteira.jpg"
  //    - LINHA ~777: No rodapé (Footer), onde também está o logotipo:
  //      src="logoapicoleteira.jpg"
  //    Se você alterar o nome do arquivo físico no seu computador (por exemplo, de "logoapicoleteira.jpg" para "meu_logo_novo.png"),
  //    você precisa ir nestas linhas do arquivo "/src/App.tsx" e trocar o valor da propriedade `src="..."` de acordo!
  //
  // 3. ATENÇÃO CRÍTICA COM MAIÚSCULAS/MINÚSCULAS (Case Sensitivity):
  //    - Computadores locais (Windows ou Mac) muitas vezes abrem imagens mesmo se o nome real for
  //      "logoapicoleteira.JPG" e no código estiver escrito "logoapicoleteira.jpg".
  //      ⚠️ No GitHub e nos servidores Linux de produção, isso causará ERRO de carregamento de imagem!
  //      Por isso, o nome que você escrever no código (em /src/App.tsx) deve ser EXATAMENTE IDÊNTICO,
  //      incluindo cada letra maiúscula/minúscula e a extensão (.jpg / .jpeg / .png / .JPG), ao arquivo físico.
  //
  // 4. CAMINHO DAS OUTRAS IMAGENS DA PÁGINA (Imagens da infância, máquinas, Instagram, etc):
  //    - Elas estão guardadas na pasta "/src/assets/images/".
  //    - Se você quiser substituí-las, basta colocar as suas novas imagens na pasta "/src/assets/images/",
  //      ir no arquivo conceitual onde as imagens do site estão definidas e trocar os nomes para corresponder exatamente.
  //      Por Exemplo, no arquivo "/src/App.tsx" ou em fontes estáticas onde elas forem carregadas diretamente.
  //
  // =========================================================================

  // Rota de Health Check / API simples
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Apicoleteira Backend Ativo" });
  });

  // Configuração do Vite no Express (Desenvolvimento vs Produção)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend Express rodando na porta ${PORT}`);
  });
}

startServer();
