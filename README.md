# 🧪 Controle de Inspeção de Qualidade


## 📋 Descrição

Este projeto consiste em um **formulário web de Controle de Inspeção de Qualidade**, desenvolvido utilizando **HTML**, **CSS** e **JavaScript**, com o **Fluig Style Guide** como base de padronização visual.

Seu objetivo principal é **registrar e organizar informações relacionadas à inspeção de qualidade em processos industriais**, promovendo rastreabilidade, padronização e controle nas etapas críticas da produção.

---

## 🏭 Aplicação no Processo

O formulário foi pensado para ser utilizado em ambientes industriais, envolvendo etapas como:

- **Corte**
- **Serraria**
- **Secagem**
- **Validação por Supervisor**

Cada etapa possui campos específicos e controle de visibilidade/habilitação baseado no grupo do usuário e no estágio atual do processo.

---

## 🔧 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (vanilla)**  
- **Fluig Style Guide**  
- **Eventos Fluig (displayFields, validateForm, beforeTaskSave)**  

---

## 🔐 Controle de Acesso

- A visibilidade e edição dos campos é controlada por **grupos de usuários**, como `grpCorte`, `grpSecagem`, `grpSerraria` e `grpSupervisor`.
- O comportamento dos campos varia de acordo com a **etapa do processo** (`atividade`) e o **grupo ao qual o usuário pertence`.

---

## ✅ Funcionalidades

- Controle de acesso por grupo e atividade
- Exibição dinâmica de campos conforme a etapa
- Validação de preenchimento obrigatório
- Anexos e campos de verificação por etapa
- Validação final pelo supervisor (liberação ou reprovação)

---

## 📂 Estrutura do Projeto
```bash
├── form/
│ └── form.html
├── scripts/
│ ├── displayFields.js
│ ├── validateForm.js
│ └── beforeTaskSave.js
├── css/
│ └── style.css
├── README.md
```
