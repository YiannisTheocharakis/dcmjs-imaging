const DicomImage = require('./../src/DicomImage');
const WindowLevel = require('./../src/WindowLevel');

const chai = require('chai');
const expect = chai.expect;

describe('WindowLevel', () => {
  it('should correctly construct a WindowLevel', () => {
    const windowLevel = new WindowLevel(100, 200, 'DESCRIPTION');
    expect(windowLevel.getWindow()).to.be.eq(100);
    expect(windowLevel.getLevel()).to.be.eq(200);
    expect(windowLevel.getDescription()).to.be.eq('DESCRIPTION');
    windowLevel.setWindow(300);
    windowLevel.setLevel(400);
    windowLevel.setDescription('DESCRIPTION2');
    expect(windowLevel.getWindow()).to.be.eq(300);
    expect(windowLevel.getLevel()).to.be.eq(400);
    expect(windowLevel.getDescription()).to.be.eq('DESCRIPTION2');
  });

  it('should correctly construct a WindowLevel from DicomImage', () => {
    const image1 = new DicomImage({
      WindowCenter: 200,
      WindowWidth: 100,
      WindowCenterWidthExplanation: 'DESCRIPTION',
    });
    const windowLevel1 = WindowLevel.fromDicomImage(image1);
    expect(windowLevel1[0].getLevel()).to.be.eq(200);
    expect(windowLevel1[0].getWindow()).to.be.eq(100);
    expect(windowLevel1[0].getDescription()).to.be.eq('DESCRIPTION');

    const image2 = new DicomImage({
      WindowCenter: [200, 300],
      WindowWidth: [100, 200],
      WindowCenterWidthExplanation: ['DESCRIPTION1', 'DESCRIPTION2'],
    });
    const windowLevel2 = WindowLevel.fromDicomImage(image2);
    expect(windowLevel2[0].getLevel()).to.be.eq(200);
    expect(windowLevel2[0].getWindow()).to.be.eq(100);
    expect(windowLevel2[0].getDescription()).to.be.eq('DESCRIPTION1');
    expect(windowLevel2[1].getLevel()).to.be.eq(300);
    expect(windowLevel2[1].getWindow()).to.be.eq(200);
    expect(windowLevel2[1].getDescription()).to.be.eq('DESCRIPTION2');

    const image3 = new DicomImage({
      WindowCenter: 0.5,
      WindowWidth: 1.1,
    });
    const windowLevel3 = WindowLevel.fromDicomImage(image3);
    expect(windowLevel3[0].getLevel()).to.be.eq(0.5);
    expect(windowLevel3[0].getWindow()).to.be.eq(1.1);
    expect(windowLevel3[0].getDescription()).to.be.undefined;
  });

  it('should throw for not parsable window or level values', () => {
    const image = new DicomImage({
      WindowCenter: 'WindowCenter',
      WindowWidth: 'WindowWidth',
    });

    expect(() => {
      WindowLevel.fromDicomImage(image);
    }).to.throw();
  });
});
