export default function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <div className="section-heading">
          <h2>세 명의 전문의가 함께 진료합니다</h2>
          <p>각자의 전문 분야에서 쌓아온 경험을 협진으로 연결합니다</p>
        </div>
        <div className="values">
          <div className="value-item">
            <div className="value-photo">
              <img src="/doctors/kang-taehyun.jpg" alt="강태현 원장" className="doctor-photo-circle" />
            </div>
            <div className="role">보철 · 임플란트 대표원장</div>
            <h3>강태현 원장</h3>
            <ul className="credentials">
              <li>서울대학교 치과대학 졸업</li>
              <li>SKCD(Society of Korean Clinical Dentist) 창립멤버</li>
              <li>ITI / Harvard School of Dental Medicine Implant Course</li>
              <li>대한 임플란트학회 · 대한 보철학회 정회원</li>
            </ul>
          </div>
          <div className="value-item">
            <div className="value-photo">
              <img src="/doctors/lim-woongtaek.jpg" alt="임웅택 원장" className="doctor-photo-circle" />
            </div>
            <div className="role">교정과 원장</div>
            <h3>임웅택 원장</h3>
            <ul className="credentials">
              <li>서울대학교 치과대학 졸업</li>
              <li>Director of Orthodontic Seminar Group, LPO</li>
              <li>대한 교정학회 정회원</li>
              <li>대한 설측교정학회(KSLO) · 한국 설측교정학회(KLOA) 정회원</li>
            </ul>
          </div>
          <div className="value-item">
            <div className="value-photo">
              <img src="/doctors/jung-hyunhee.jpg" alt="정현희 원장" className="doctor-photo-circle" />
            </div>
            <div className="role">치주과 원장</div>
            <h3>정현희 원장</h3>
            <ul className="credentials">
              <li>서울대학교 치과대학 졸업</li>
              <li>SKCD(Society of Korean Clinical Dentist) 창립멤버</li>
              <li>서울아산병원 치주과 · 前 건강증진센터 치과 과장</li>
              <li>대한 치주과학회 정회원 · 치주 인정의</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
