export function formatWarranty(warranty, excludeText = false) {
  const warrantyYears = Math.floor(warranty / 12);

  const warrantyLabel =
    warrantyYears === 1
      ? `Warranty ${warrantyYears} year`
      : `Warranty ${warrantyYears} years`;

  if (excludeText) {
    const excluded = warrantyLabel.split('Warranty');
    return excluded.join(' ');
  }

  return warrantyLabel;
}
