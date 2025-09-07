import React, { useState } from 'react';
import SellerLayout from './SellerLayout';
import styles from './UploadNewArt.module.css';

function UploadNewArt() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    price: '',
    tags: '',
  });
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formattedPrice = form.price ? `₹${form.price}` : '₹0.00';
  const tagList = form.tags.split(',').map(t => t.trim()).filter(Boolean);
  const lightColors = [
    '#E0F2FE', '#FDE68A', '#DCFCE7', '#FBCFE8', '#E9D5FF', '#FFEDD5', '#E2E8F0', '#FDE2E2'
  ];

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };
  return (
    <SellerLayout>
      <h1 className={styles.pageTitle}>Upload Your Artwork</h1>
      <p className={styles.pageSubtitle}>Showcase your creativity to the world</p>

      {/* Upload Area */}
      <div className={styles.card}>
        <div className={styles.grid}>
          <div className={styles.dropArea}>
            <div>
              <div style={{ fontSize: 42 }}>📷</div>
              <label className={styles.btnSecondary} style={{ marginTop: 12, display: 'inline-block', cursor: 'pointer' }}>
                Browse Files
                <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
              </label>
            </div>
          </div>
          <div className={styles.thumb}>
            {previewUrl ? (
              <img className={styles.thumbPreviewImg} src={previewUrl} alt="preview" />
            ) : (
              <div className={styles.thumbPreview} />
            )}
            <small className={styles.thumbTitle}>
              {form.title ? `Title: ${form.title}` : 'Title: Art Piece'}
            </small>
            <small className={styles.thumbPrice}>{formattedPrice}</small>
            {tagList.length > 0 && (
              <div className={styles.tagsWrap}>
                {tagList.map((t, i) => (
                  <span
                    key={i}
                    className={styles.tagPill}
                    style={{ background: lightColors[i % lightColors.length], color: '#1a202c' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {form.category && (
              <div style={{ marginTop: 6, fontSize: 12, color: '#718096' }}>Category: {form.category}</div>
            )}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={styles.card}>
        <div className={styles.fieldRow}>
          <input className={styles.input} name="title" value={form.title} onChange={handleChange} placeholder="Artwork Title" />
          <select className={styles.select} name="category" value={form.category} onChange={handleChange}>
            <option value="" disabled>
              Select Category
            </option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Photography">Photography</option>
            <option value="Digital Art">Digital Art</option>
            <option value="Mixed Media">Mixed Media</option>
            <option value="Others">Others</option>
            
          </select>
          <input className={styles.input} type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price (₹)" />
          <input className={styles.input} name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" />
        </div>

        <div className={styles.fieldRow}>
          <label className={styles.checkbox}>
            <input type="checkbox" id="ai" />
            AI-Enhanced Story
          </label>
        </div>

        <textarea
          className={styles.textarea}
          placeholder="Short description or story about your artwork..."
        />

        <div className={styles.actions}>
          <button className={styles.btnSecondary}>Save as Draft</button>
          <button className={styles.btnPrimary}>Publish Artwork</button>
        </div>
      </div>
    </SellerLayout>
  );
}

export default UploadNewArt;
