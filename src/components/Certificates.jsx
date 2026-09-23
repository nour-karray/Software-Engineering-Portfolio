import { motion } from "framer-motion";
import { FiAward, FiGlobe, FiInstagram, FiUsers } from "react-icons/fi";
import { useLanguage } from "../hooks/useLanguage.jsx";

const columnConfig = [
  {
    key: "certificates",
    icon: FiAward,
  },
  {
    key: "languages",
    icon: FiGlobe,
  },
  {
    key: "associations",
    icon: FiUsers,
  },
];

function Certificates() {
  const { t } = useLanguage();
  const CertificateIcon = columnConfig[0].icon;
  const LanguageIcon = columnConfig[1].icon;
  const AssociationIcon = columnConfig[2].icon;

  return (
    <section className="section credentials" id="certificats">
      <div className="container">
        <motion.div
          className="section-heading section-heading--center credentials__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">{t.credentials.eyebrow}</p>
          <h2>{t.credentials.title}</h2>
          <p>{t.credentials.intro}</p>
        </motion.div>

        <motion.div
          className="credentials__card"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="credentials__column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.08, duration: 0.5 }}
          >
            <div className="credentials__column-title">
              <span>
                <CertificateIcon />
              </span>
              <div>
                <h3>{t.credentials.columns.certificates}</h3>
              </div>
            </div>
            <div className="credential-list">
              {t.credentials.certificates.map((certificate, index) => (
                <motion.article
                  className="credential-item"
                  key={certificate.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {certificate.image ? (
                    <a
                      className="credential-item__image"
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le certificat ${certificate.title}`}
                    >
                      <img src={certificate.image} alt={certificate.title} loading="lazy" />
                    </a>
                  ) : (
                    <span className="credential-item__badge">{certificate.short}</span>
                  )}
                  <div>
                    <h4>{certificate.title}</h4>
                    <p>{certificate.issuer}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="credentials__column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            <div className="credentials__column-title">
              <span>
                <LanguageIcon />
              </span>
              <div>
                <h3>{t.credentials.columns.languages}</h3>
              </div>
            </div>
            <div className="language-list">
              {t.credentials.languages.map((language, index) => (
                <motion.div
                  className="language-row"
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <strong>{language.name}</strong>
                    <span>{language.level}</span>
                  </div>
                  <div className="language__track">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.25 + index * 0.12 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="credentials__column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.28, duration: 0.5 }}
          >
            <div className="credentials__column-title">
              <span>
                <AssociationIcon />
              </span>
              <div>
                <h3>{t.credentials.columns.associations}</h3>
              </div>
            </div>
            <div className="association-timeline">
              {t.credentials.associations.map((item, index) => (
                <motion.article
                  className="association-item"
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <span className="association-item__meta">
                      {item.type} · {item.year}
                    </span>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                    {item.description && (
                      <p className="association-item__description">{item.description}</p>
                    )}
                    {item.instagram && (
                      <a
                        className="association-item__link"
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiInstagram />
                        {t.credentials.instagramLink}
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="credentials__slogan"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {t.credentials.slogan}
        </motion.p>
      </div>
    </section>
  );
}

export default Certificates;
