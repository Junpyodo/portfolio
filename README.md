# My Portfolio

정적 웹 포트폴리오 템플릿입니다. **`data.js` 파일 하나만 수정**하면 내용이 바뀝니다. (빌드·설치 필요 없음)

## 1. GitHub에 올리기
1. GitHub에서 새 저장소(Repository) 생성 (예: `portfolio`)
2. 이 폴더의 파일 전체를 업로드 (**Add file → Upload files**), Commit
   - `.nojekyll` 같은 점(.)으로 시작하는 파일도 함께 올라가야 합니다. (드래그 시 숨김 파일이 빠지면 파일 목록에서 직접 확인)

## 2. 웹사이트로 공개하기 (GitHub Pages)
1. 저장소 **Settings → Pages**
2. **Source: Deploy from a branch**, Branch: `main` / `/ (root)` → Save
3. 1~2분 뒤 `https://<내아이디>.github.io/<저장소명>/` 에서 확인
   - 저장소 이름을 `<내아이디>.github.io` 로 만들면 주소가 `https://<내아이디>.github.io/` 로 짧아집니다.

## 3. 내용 수정하기
- GitHub에서 `data.js` 열기 → 연필(✏️) 아이콘 → 수정 → **Commit changes**
- 저장하면 Pages가 자동으로 다시 배포합니다. (반영까지 1~2분)
- 섹션 전체를 숨기려면 해당 배열을 `[]` 로 비우면 됩니다.

## 4. 이미지 넣기
1. `assets/` 폴더에 이미지 업로드 (Add file → Upload files)
2. `data.js` 의 프로젝트에 `images: ["assets/파일명.png"]` 추가 (여러 장이면 슬라이드로 표시)

## 파일 구성
| 파일 | 역할 |
|---|---|
| `data.js` | **내용 (여기만 수정)** |
| `index.html` | 페이지 뼈대 |
| `style.css` | 디자인 (색상은 맨 위 `:root` 변수) |
| `script.js` | data.js를 읽어 화면을 그리는 코드 |
| `assets/` | 이미지 |

## 로컬에서 미리보기
`index.html` 을 브라우저로 열면 됩니다.
