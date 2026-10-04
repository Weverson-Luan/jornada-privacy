import type { PrivacyPolicy } from './types';

/**
 * Conteúdo da Política de Privacidade do aplicativo Jornada.
 *
 * Esta política foi redigida a partir do comportamento real do código-fonte
 * do aplicativo (coleta de localização, câmera, biometria, Bluetooth,
 * armazenamento local, diagnóstico técnico etc.). Campos de identificação
 * societária (CNPJ, endereço, Encarregado de Dados) estão marcados como
 * "A confirmar" e precisam de validação jurídica antes da publicação.
 */
export const privacyPolicy: PrivacyPolicy = {
  appName: 'Jornada',
  appVersion: '4.0.0',
  policyVersion: '1.0',
  updatedAt: '4 de outubro de 2026',

  company: {
    legalName: 'Expresso Figueiredo (Grupo Figueiredo)',
    cnpj: '22.463.970/0012-19',
    address: 'R. Leiria, 689 - São Francisco, Belo Horizonte - MG, 31255-100',
    dpoEmail: 'expressofigueiredoapps@gmail.com',
  },

  summary: [
    {
      title: 'Localização só no registro de atividade',
      text: 'Sua localização é usada apenas no momento em que você registra uma atividade de jornada (início, parada, descanso). O Jornada não rastreia sua posição em segundo plano.',
    },
    {
      title: 'Reconhecimento facial local',
      text: 'Para confirmar sua identidade antes de registrar uma atividade, comparamos sua selfie com sua foto de referência diretamente no aparelho.',
    },
    {
      title: 'Seus dados não são vendidos',
      text: 'Usamos seus dados pessoais apenas para operar o Jornada e cumprir obrigações legais de controle de jornada. Nunca vendemos seus dados a terceiros.',
    },
    {
      title: 'Você no controle',
      text: 'Você pode solicitar acesso, correção, portabilidade ou eliminação dos seus dados pessoais a qualquer momento, conforme a LGPD.',
    },
  ],

  sections: [
    {
      id: 'sobre',
      title: 'Sobre esta política',
      blocks: [
        {
          type: 'paragraph',
          text: 'Esta Política de Privacidade explica como o aplicativo Jornada coleta, usa, armazena, compartilha e protege os dados pessoais dos motoristas que o utilizam, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD) e com a legislação aplicável ao transporte rodoviário e ao controle de jornada de trabalho, como a Lei nº 13.103/2015 (Lei do Motorista) e a Consolidação das Leis do Trabalho (CLT).',
        },
        {
          type: 'paragraph',
          text: 'O Jornada é uma ferramenta de uso corporativo e interno, disponibilizada exclusivamente aos motoristas contratados pelo Grupo Figueiredo para registro de jornada, atividades operacionais, segurança veicular e conformidade regulatória. O aplicativo não é destinado ao público em geral.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Ao utilizar o aplicativo',
          text: 'Ao acessar e utilizar o Jornada, você declara estar ciente desta Política de Privacidade, sem prejuízo dos direitos garantidos pela LGPD.',
        },
      ],
    },
    {
      id: 'quem-somos',
      title: 'Quem somos (controlador dos dados)',
      blocks: [
        {
          type: 'paragraph',
          text: 'O controlador dos dados pessoais tratados por meio do aplicativo Jornada é a empresa identificada abaixo, responsável por decidir as finalidades e a forma do tratamento dos seus dados pessoais.',
        },
        {
          type: 'paragraph',
          text: 'Para dúvidas ou solicitações relacionadas aos seus dados pessoais, utilize o canal de contato do Encarregado de Dados (DPO) indicado abaixo, ou a seção "Fale conosco", ao final desta política.',
        },
      ],
    },
    {
      id: 'dados-cadastro',
      title: 'Dados de cadastro e perfil',
      blocks: [
        {
          type: 'paragraph',
          text: 'Para utilizar o Jornada, você realiza login com usuário e senha fornecidos pelo Grupo Figueiredo. A partir desse acesso, coletamos e armazenamos os seguintes dados de cadastro:',
        },
        {
          type: 'list',
          items: [
            'Nome completo',
            'CPF',
            'Usuário de acesso e senha',
            'Identificador interno de colaborador',
            'Foto de referência do motorista (para reconhecimento facial)',
            'Placa do veículo vinculado a você',
            'Situação cadastral (ex.: motorista ativo, em repouso, férias)',
            'Saldo de horas de jornada e indicadores de repouso semanal/noturno',
          ],
        },
        {
          type: 'paragraph',
          text: 'Esses dados são obtidos diretamente de você (no login) e dos sistemas internos de gestão de pessoas e frota do Grupo Figueiredo, que alimentam o aplicativo com as informações do seu cadastro de colaborador.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Recuperação de acesso',
          text: 'Ao usar a opção "Esqueci a senha", enviamos sua solicitação (identificada pelo CPF) aos sistemas internos do Grupo Figueiredo, que providenciam o envio de novas credenciais ao e-mail e/ou WhatsApp já cadastrados no seu perfil de colaborador.',
        },
      ],
    },
    {
      id: 'dados-localizacao',
      title: 'Dados de localização',
      blocks: [
        {
          type: 'paragraph',
          text: 'O Jornada solicita permissão de localização do seu dispositivo para registrar onde cada atividade de jornada foi realizada.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Coleta pontual, não contínua',
          text: 'A localização é capturada apenas no exato momento em que você registra uma atividade (início de jornada, parada, descanso, reconhecimento facial, assinatura do resumo diário ou remoção de bobina). O Jornada não realiza rastreamento contínuo ou em segundo plano.',
        },
        {
          type: 'list',
          items: [
            'Latitude e longitude no momento do registro da atividade',
            'Comparação com a localização cadastrada da sua residência, para liberar determinadas marcações (ex.: disposição com veículo parado)',
          ],
        },
        {
          type: 'paragraph',
          text: 'Esses dados ficam temporariamente no seu aparelho e são enviados aos nossos servidores junto com o registro da atividade correspondente, permanecendo associados a ela para fins de comprovação de jornada.',
        },
      ],
    },
    {
      id: 'dados-biometricos',
      title: 'Reconhecimento facial e dados biométricos',
      blocks: [
        {
          type: 'paragraph',
          text: 'Para validar sua identidade antes de determinados registros de jornada, o Jornada usa a câmera do dispositivo para capturar uma selfie e compará-la com a foto de referência do seu cadastro. Esse é um dado pessoal sensível, nos termos do art. 5º, inciso II, da LGPD, e recebe tratamento especial.',
        },
        {
          type: 'list',
          items: [
            'A captura e a comparação facial (biometria) são feitas localmente, no próprio aparelho, por tecnologia de reconhecimento facial embarcada no aplicativo',
            'A foto capturada e o resultado da verificação (reconhecida ou não) são enviados aos nossos servidores junto com a atividade de jornada registrada',
            'Não compartilhamos sua selfie ou seus dados biométricos com empresas de reconhecimento facial de terceiros fora do aplicativo',
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Por que coletamos esse dado',
          text: 'O reconhecimento facial existe para confirmar que é você — e não outra pessoa — quem está registrando a jornada, atendendo a exigências de controle, segurança e idoneidade do registro de jornada de motoristas profissionais.',
        },
      ],
    },
    {
      id: 'dados-fotos',
      title: 'Fotos operacionais (veículo, carga e manutenção)',
      blocks: [
        {
          type: 'paragraph',
          text: 'Além da selfie de identificação, o Jornada usa a câmera do dispositivo para capturar fotos relacionadas à operação, que não retratam necessariamente você, mas o veículo, a carga ou o ambiente de trabalho:',
        },
        {
          type: 'list',
          items: [
            'Checklist fotográfico do veículo (frente, laterais, traseira e quinas)',
            'Foto da fita e do painel do tacógrafo, no resumo diário de jornada',
            'Fotos de manutenção/pane do veículo',
            'Fotos de bobinas e carregamentos, no módulo de carregamento',
          ],
        },
        {
          type: 'paragraph',
          text: 'Essas fotos são armazenadas temporariamente no seu aparelho e enviadas aos nossos servidores para fins de controle operacional, segurança veicular e comprovação de carga/manutenção.',
        },
        {
          type: 'paragraph',
          text: 'O Jornada também permite a leitura de código de barras/QR Code de notas fiscais eletrônicas (NF-e) e cupons de abastecimento. Nesse caso, apenas o código numérico da nota é enviado aos nossos servidores — nenhuma imagem do documento é capturada ou armazenada.',
        },
      ],
    },
    {
      id: 'dados-bluetooth',
      title: 'Conexão Bluetooth com o veículo',
      blocks: [
        {
          type: 'paragraph',
          text: 'O Jornada usa o Bluetooth do seu dispositivo para localizar e parear com a central multimídia do caminhão ao qual você está vinculado, facilitando a identificação de proximidade com o veículo durante o registro de determinadas atividades.',
        },
        {
          type: 'list',
          items: [
            'Lista de dispositivos Bluetooth pareados e disponíveis próximos ao seu aparelho',
            'Identificador do dispositivo Bluetooth do veículo, associado ao registro de atividades',
          ],
        },
        {
          type: 'paragraph',
          text: 'Não usamos o Bluetooth para rastrear outros dispositivos ao seu redor, apenas para identificar a proximidade com o veículo da frota ao qual você está vinculado.',
        },
      ],
    },
    {
      id: 'dados-diagnostico',
      title: 'Dados de diagnóstico e uso do aplicativo',
      blocks: [
        {
          type: 'paragraph',
          text: 'Utilizamos a ferramenta Sentry para monitorar erros, falhas e o funcionamento técnico do aplicativo. Para isso, associamos aos eventos técnicos registrados:',
        },
        {
          type: 'list',
          items: [
            'Seu identificador interno de colaborador e nome, para que possamos investigar problemas relatados por você',
            'Sua situação cadastral de motorista, para contextualizar o diagnóstico',
            'Registros técnicos (logs) de chamadas à nossa própria API, incluindo horário e conteúdo da resposta recebida',
          ],
        },
        {
          type: 'paragraph',
          text: 'Em determinadas condições, definidas por uma configuração interna do Grupo Figueiredo, o aplicativo pode gravar uma sessão de uso da tela para fins de diagnóstico técnico aprofundado. Essa gravação é tratada como dado de diagnóstico interno e não é usada para monitoramento comportamental, publicidade ou qualquer finalidade alheia à manutenção do aplicativo.',
        },
        {
          type: 'paragraph',
          text: 'Também registramos o status de conectividade do seu dispositivo (online/offline), exclusivamente para decidir quando sincronizar os dados pendentes com os nossos servidores — não coletamos o histórico de redes a que você se conecta.',
        },
      ],
    },
    {
      id: 'dados-nao-usados',
      title: 'Permissões solicitadas e não utilizadas',
      blocks: [
        {
          type: 'paragraph',
          text: 'Em alguns pontos, o Jornada solicita permissões do seu dispositivo que estão reservadas para funcionalidades futuras ou herdadas de bibliotecas internas, mas que não são utilizadas ativamente hoje:',
        },
        {
          type: 'list',
          items: [
            'Microfone e áudio: a permissão é solicitada, mas o aplicativo não grava nem transmite áudio em nenhuma funcionalidade atual',
            'Galeria de fotos: o aplicativo captura fotos diretamente pela câmera; não acessamos fotos já existentes na galeria do seu dispositivo',
          ],
        },
        {
          type: 'paragraph',
          text: 'Mantemos esta seção para total transparência. Caso essas funcionalidades venham a ser ativadas futuramente, esta política será atualizada previamente para refletir a nova finalidade de uso.',
        },
      ],
    },
    {
      id: 'como-usamos',
      title: 'Para que usamos seus dados',
      blocks: [
        {
          type: 'paragraph',
          text: 'Utilizamos os dados pessoais descritos nesta política para as seguintes finalidades:',
        },
        {
          type: 'list',
          items: [
            'Registrar e controlar sua jornada de trabalho (início, pausas, descansos, refeições e encerramento), conforme exigido pela legislação trabalhista e de transporte',
            'Confirmar sua identidade antes de registros de jornada, por meio de reconhecimento facial',
            'Vincular o registro de atividades ao local e ao veículo em que foram realizadas',
            'Gerar relatórios e resumos diários, semanais e mensais de jornada',
            'Viabilizar a assinatura eletrônica dos resumos de jornada, quando aplicável',
            'Realizar checklists de segurança veicular e controle de manutenção da frota',
            'Enviar notificações e lembretes sobre pausas e descansos obrigatórios',
            'Diagnosticar e corrigir falhas técnicas do aplicativo',
            'Cumprir obrigações legais e regulatórias perante autoridades de trabalho e de trânsito',
          ],
        },
      ],
    },
    {
      id: 'base-legal',
      title: 'Base legal para o tratamento',
      blocks: [
        {
          type: 'paragraph',
          text: 'O tratamento dos seus dados pessoais pelo Jornada está fundamentado nas seguintes bases legais previstas na LGPD:',
        },
        {
          type: 'table',
          columns: ['Base legal (LGPD)', 'Para quais dados se aplica'],
          rows: [
            [
              'Cumprimento de obrigação legal ou regulatória (art. 7º, II)',
              'Registro de jornada, localização do registro, resumos de jornada e checklists de segurança veicular',
            ],
            [
              'Execução de contrato de trabalho (art. 7º, V)',
              'Dados de cadastro, situação do motorista e vínculo com o veículo',
            ],
            [
              'Legítimo interesse do controlador (art. 7º, IX)',
              'Dados de diagnóstico técnico, conexão Bluetooth com o veículo e dados de uso do aplicativo',
            ],
            [
              'Dado sensível tratado para cumprimento de obrigação legal/regulatória ou exercício regular de direito em contrato (art. 11, II)',
              'Dados biométricos de reconhecimento facial, usados para validar a identidade do motorista no registro de jornada',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Revisão jurídica',
          text: 'A classificação das bases legais acima é uma referência inicial e será formalmente validada pelo departamento jurídico do Grupo Figueiredo antes da publicação definitiva desta política.',
        },
      ],
    },
    {
      id: 'compartilhamento',
      title: 'Com quem compartilhamos seus dados',
      blocks: [
        {
          type: 'paragraph',
          text: 'Não vendemos seus dados pessoais. Compartilhamos dados pessoais apenas nas seguintes hipóteses:',
        },
        {
          type: 'list',
          items: [
            'Dentro do Grupo Figueiredo, com as áreas responsáveis por gestão de pessoas, frota, segurança e compliance, estritamente para as finalidades descritas nesta política',
            'Com o Sentry (Functional Software, Inc.), como operador de dados, para monitoramento técnico e diagnóstico de erros do aplicativo',
            'Com provedores de assinatura eletrônica (ex.: ZapSign), quando você opta por assinar eletronicamente resumos de jornada',
            'Com autoridades públicas, órgãos reguladores de transporte (como a ANTT) e autoridades trabalhistas ou judiciais, quando exigido por lei, regulamento ou ordem judicial',
          ],
        },
        {
          type: 'paragraph',
          text: 'Esses terceiros têm acesso apenas aos dados estritamente necessários para a prestação do serviço contratado e estão sujeitos a obrigações contratuais de confidencialidade e proteção de dados.',
        },
      ],
    },
    {
      id: 'armazenamento-seguranca',
      title: 'Armazenamento e segurança',
      blocks: [
        {
          type: 'paragraph',
          text: 'Parte dos seus dados é armazenada temporariamente no seu próprio dispositivo (por exemplo, atividades pendentes de sincronização, token de acesso e cache de fotos), permitindo que o aplicativo funcione mesmo sem conexão à internet. Assim que a conexão é restabelecida, esses dados são automaticamente sincronizados com os nossos servidores.',
        },
        {
          type: 'list',
          items: [
            'O backup automático do sistema operacional Android está desativado para o aplicativo, evitando a cópia dos seus dados para serviços de nuvem do fabricante do aparelho',
            'O acesso aos nossos servidores exige autenticação por usuário, senha e token de sessão',
            'Dados de atividades já encerradas e sincronizadas são removidos do armazenamento local do seu dispositivo',
            'Ao realizar logout, os dados de sessão, cache e cadastro armazenados localmente no aparelho são apagados',
          ],
        },
        {
          type: 'paragraph',
          text: 'Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou vazamento. Nenhum sistema é inteiramente livre de riscos; caso identifiquemos um incidente de segurança que possa acarretar risco relevante a você, seguiremos os procedimentos de notificação previstos na LGPD.',
        },
      ],
    },
    {
      id: 'retencao',
      title: 'Por quanto tempo guardamos seus dados',
      blocks: [
        {
          type: 'list',
          items: [
            'Dados de jornada, localização de registros e checklists de segurança: mantidos pelo prazo exigido pela legislação trabalhista e de transporte, mesmo após o encerramento do seu vínculo com o Grupo Figueiredo',
            'Dados de cadastro: mantidos durante o seu vínculo contratual e pelo prazo adicional exigido por obrigações legais, fiscais e trabalhistas',
            'Dados de diagnóstico técnico (Sentry): mantidos pelo período definido na política de retenção contratada com o fornecedor',
            'Dados em cache local no dispositivo (token, foto, posição): removidos ao fazer logout do aplicativo',
          ],
        },
        {
          type: 'paragraph',
          text: 'Encerrados os prazos de retenção aplicáveis, os dados pessoais são eliminados ou anonimizados, exceto quando sua conservação for exigida para cumprimento de obrigação legal ou para o exercício regular de direitos em processo judicial, administrativo ou arbitral.',
        },
      ],
    },
    {
      id: 'direitos',
      title: 'Seus direitos como titular dos dados',
      blocks: [
        {
          type: 'paragraph',
          text: 'Nos termos do art. 18 da LGPD, você tem direito a:',
        },
        {
          type: 'list',
          items: [
            'Confirmar a existência de tratamento dos seus dados',
            'Acessar os seus dados pessoais',
            'Corrigir dados incompletos, inexatos ou desatualizados',
            'Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD',
            'Solicitar a portabilidade dos seus dados a outro fornecedor de serviço',
            'Solicitar a eliminação dos dados tratados com base no seu consentimento, quando aplicável',
            'Obter informações sobre as entidades públicas e privadas com as quais compartilhamos seus dados',
            'Revogar o consentimento, quando o tratamento se basear nele, a qualquer momento',
            'Opor-se a tratamento realizado com base em outras hipóteses legais, em caso de descumprimento da LGPD',
          ],
        },
        {
          type: 'paragraph',
          text: 'Para exercer qualquer um desses direitos, entre em contato com nosso Encarregado de Dados (DPO) pelos canais indicados na seção "Fale conosco". Responderemos às suas solicitações dentro dos prazos estabelecidos pela LGPD.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies e tecnologias semelhantes',
      blocks: [
        {
          type: 'paragraph',
          text: 'O aplicativo Jornada é um aplicativo móvel e não utiliza cookies de navegador. O funcionamento do app depende de armazenamento local no dispositivo (para operação offline) e de um identificador de sessão (token de acesso), descritos nas seções anteriores desta política.',
        },
        {
          type: 'paragraph',
          text: 'Este site, que hospeda a presente Política de Privacidade, não utiliza cookies, pixels de rastreamento ou ferramentas de análise de navegação.',
        },
      ],
    },
    {
      id: 'menores',
      title: 'Uso por menores de idade',
      blocks: [
        {
          type: 'paragraph',
          text: 'O Jornada é destinado exclusivamente a motoristas profissionais maiores de idade, devidamente contratados e habilitados para condução de veículos de carga, conforme exigido pela legislação de trânsito e trabalhista brasileira. O aplicativo não é destinado a crianças ou adolescentes e não coleta intencionalmente dados pessoais de menores de idade.',
        },
      ],
    },
    {
      id: 'alteracoes',
      title: 'Alterações desta política',
      blocks: [
        {
          type: 'paragraph',
          text: 'Esta Política de Privacidade pode ser atualizada periodicamente, para refletir mudanças no aplicativo, na legislação aplicável ou nas práticas de tratamento de dados do Grupo Figueiredo.',
        },
        {
          type: 'paragraph',
          text: 'Alterações relevantes serão comunicadas a você por meio do próprio aplicativo antes de entrarem em vigor. Recomendamos a consulta periódica a esta página para acompanhar a versão mais atual.',
        },
        {
          type: 'callout',
          tone: 'info',
          title: 'Versão desta política',
          text: 'Consulte a versão e a data de atualização indicadas no topo desta página.',
        },
      ],
    },
    {
      id: 'contato',
      title: 'Fale conosco',
      blocks: [
        {
          type: 'paragraph',
          text: 'Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos como titular de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelos canais abaixo.',
        },
        {
          type: 'list',
          items: ['Telefone: (31) 3448-7800'],
        },
        {
          type: 'paragraph',
          text: 'Caso não receba retorno em prazo razoável, você também pode registrar reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD), pelo site gov.br/anpd.',
        },
      ],
    },
  ],
};
